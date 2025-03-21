import React, { useState } from "react";
import ItemParentCard from "./ItemParentCard";
import ItemChildCard from "./ItemChildCard";
import { Item, items } from "../utils/items";

interface ItemDependencyTreeProps {
  item: Item;
}

const ItemDependencyTree: React.FC<ItemDependencyTreeProps> = ({ item }) => {
  const [showDependencies, setShowDependencies] = useState(false);
  const [visibleChildDependencies, setVisibleChildDependencies] = useState<{ [key: number]: boolean }>({});

  const toggleParentDependencies = () => {
    setShowDependencies((prev) => !prev);
  };

  const toggleChildDependencies = (childId: number) => {
    setVisibleChildDependencies((prev) => {
      const newVisibility = { ...prev };
      if (newVisibility[childId]) {
        delete newVisibility[childId];
      } else {
        newVisibility[childId] = true;
      }
      return newVisibility;
    });
  };

  const childItems: (Item | null)[] = (item.dependencies ?? []).map((id) => {
    const childItem = items.find((i) => i.id === id);
    return childItem
      ? {
          id: childItem.id,
          name: childItem.name,
          category: childItem.category,
          image: childItem.image,
          type: childItem.type,
          dependencies: childItem.dependencies ?? [],
        }
      : null;
  });

  const validChildItems: Item[] = childItems.filter((child): child is Item => child !== null);

  // Function to render child dependencies with cycle detection
  const renderChildDependencies = (child: Item, ancestors: Set<number>) => {
    if (ancestors.has(child.id)) {
      // If the child is already in the ancestors, we've detected a cycle
      return null;
    }

    // Add current child to the ancestors set
    const newAncestors = new Set(ancestors);
    newAncestors.add(child.id);

    const childDependencies = child.dependencies ?? [];
    return childDependencies.length > 0 ? (
      <div className="mt-4 flex justify-center gap-6">
        {childDependencies.map((depId) => {
          const depItem = items.find((item) => item.id === depId);
          return depItem ? (
            <div key={depItem.id} className="flex flex-col items-center">
              <ItemChildCard
                item={depItem}
                onToggleDependencies={() => toggleChildDependencies(depItem.id)}
                showDependencies={visibleChildDependencies[depItem.id] || false}
              />
              {visibleChildDependencies[depItem.id] && renderChildDependencies(depItem, newAncestors)}
            </div>
          ) : null;
        })}
      </div>
    ) : null;
  };

  return (
    <div className="p-6 bg-black rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <ItemParentCard
          item={item}
          onToggleDependencies={toggleParentDependencies}
          showDependencies={showDependencies}
        />

        {showDependencies && (
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {validChildItems.length > 0 ? (
              validChildItems.map((child) => {
                const isChildVisible = visibleChildDependencies[child.id];
                return (
                  <div key={child.id} className="flex flex-col items-center">
                    <ItemChildCard
                      item={child}
                      onToggleDependencies={() => toggleChildDependencies(child.id)}
                      showDependencies={isChildVisible}
                    />
                    {isChildVisible && renderChildDependencies(child, new Set())}
                  </div>
                );
              })
            ) : (
              <p className="text-white">This component does not rely on other components</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDependencyTree;
