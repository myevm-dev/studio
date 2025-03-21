// contracts.ts
export interface Contract {
    id: number;
    name: string;
    address: string;
  }
  
  export const contracts: Contract[] = [
    { id: 1, name: "Contract 1", address: "0x1234567890abcdef1234567890abcdef12345678" },
    { id: 2, name: "Contract 2", address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef" },
    { id: 3, name: "Contract 3", address: "0x1111111111111111111111111111111111111111" },
    { id: 4, name: "Contract 4", address: "0x2222222222222222222222222222222222222222" },
    { id: 5, name: "Contract 5", address: "0x3333333333333333333333333333333333333333" },
    { id: 6, name: "Contract 6", address: "0x4444444444444444444444444444444444444444" },
    { id: 7, name: "Contract 7", address: "0x5555555555555555555555555555555555555555" },
    { id: 8, name: "Contract 8", address: "0x6666666666666666666666666666666666666666" },
    { id: 9, name: "Contract 9", address: "0x7777777777777777777777777777777777777777" },
    { id: 10, name: "Contract 10", address: "0x8888888888888888888888888888888888888888" },
  ];
  