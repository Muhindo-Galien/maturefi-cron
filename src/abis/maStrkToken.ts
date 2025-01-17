export const TESTNET_VE_STRK_TOKEN = [
  {
    name: 'Token',
    type: 'impl',
    interface_name: 'mature_vault::token::interface::IToken',
  },
  {
    name: 'core::integer::u256',
    type: 'struct',
    members: [
      {
        name: 'low',
        type: 'core::integer::u128',
      },
      {
        name: 'high',
        type: 'core::integer::u128',
      },
    ],
  },
  {
    name: 'mature_vault::token::interface::IToken',
    type: 'interface',
    items: [
      {
        name: 'mint',
        type: 'function',
        inputs: [
          {
            name: 'recipient',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'burn',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'set_withdrawl_manager',
        type: 'function',
        inputs: [
          {
            name: 'withdrawl_manager',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    name: 'UpgradeableImpl',
    type: 'impl',
    interface_name: 'openzeppelin_upgrades::interface::IUpgradeable',
  },
  {
    name: 'openzeppelin_upgrades::interface::IUpgradeable',
    type: 'interface',
    items: [
      {
        name: 'upgrade',
        type: 'function',
        inputs: [
          {
            name: 'new_class_hash',
            type: 'core::starknet::class_hash::ClassHash',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    name: 'OwnableMixinImpl',
    type: 'impl',
    interface_name: 'openzeppelin_access::ownable::interface::OwnableABI',
  },
  {
    name: 'openzeppelin_access::ownable::interface::OwnableABI',
    type: 'interface',
    items: [
      {
        name: 'owner',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'transfer_ownership',
        type: 'function',
        inputs: [
          {
            name: 'new_owner',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'renounce_ownership',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'transferOwnership',
        type: 'function',
        inputs: [
          {
            name: 'newOwner',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'renounceOwnership',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
    ],
  },
  {
    name: 'ERC20Impl',
    type: 'impl',
    interface_name: 'mature_vault::token::erc20::IERC20',
  },
  {
    name: 'core::bool',
    type: 'enum',
    variants: [
      {
        name: 'False',
        type: '()',
      },
      {
        name: 'True',
        type: '()',
      },
    ],
  },
  {
    name: 'mature_vault::token::erc20::IERC20',
    type: 'interface',
    items: [
      {
        name: 'total_supply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'balance_of',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'allowance',
        type: 'function',
        inputs: [
          {
            name: 'owner',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'spender',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'transfer',
        type: 'function',
        inputs: [
          {
            name: 'recipient',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'external',
      },
      {
        name: 'transfer_from',
        type: 'function',
        inputs: [
          {
            name: 'sender',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'recipient',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'external',
      },
      {
        name: 'approve',
        type: 'function',
        inputs: [
          {
            name: 'spender',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'external',
      },
    ],
  },
  {
    name: 'ERC20MetadataImpl',
    type: 'impl',
    interface_name: 'mature_vault::token::erc20::IERC20Metadata',
  },
  {
    name: 'mature_vault::token::erc20::IERC20Metadata',
    type: 'interface',
    items: [
      {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'decimals',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u8',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    name: 'ERC20CamelOnlyImpl',
    type: 'impl',
    interface_name: 'mature_vault::token::erc20::IERC20CamelOnly',
  },
  {
    name: 'mature_vault::token::erc20::IERC20CamelOnly',
    type: 'interface',
    items: [
      {
        name: 'totalSupply',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: 'account',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [
          {
            type: 'core::integer::u256',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'transferFrom',
        type: 'function',
        inputs: [
          {
            name: 'sender',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'recipient',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'external',
      },
    ],
  },
  {
    name: 'constructor',
    type: 'constructor',
    inputs: [
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'mature_vault',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'name',
        type: 'core::felt252',
      },
      {
        name: 'symbol',
        type: 'core::felt252',
      },
      {
        name: 'decimals',
        type: 'core::integer::u8',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'key',
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'previous_owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'key',
        name: 'new_owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
    ],
  },
  {
    kind: 'enum',
    name: 'openzeppelin_access::ownable::ownable::OwnableComponent::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'OwnershipTransferred',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred',
      },
      {
        kind: 'nested',
        name: 'OwnershipTransferStarted',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'class_hash',
        type: 'core::starknet::class_hash::ClassHash',
      },
    ],
  },
  {
    kind: 'enum',
    name: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'Upgraded',
        type: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::token::erc20_component::ERC20Component::Transfer',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'from',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'key',
        name: 'to',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'data',
        name: 'value',
        type: 'core::integer::u256',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::token::erc20_component::ERC20Component::Approval',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'key',
        name: 'spender',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'data',
        name: 'value',
        type: 'core::integer::u256',
      },
    ],
  },
  {
    kind: 'enum',
    name: 'mature_vault::token::erc20_component::ERC20Component::Event',
    type: 'event',
    variants: [
      {
        kind: 'nested',
        name: 'Transfer',
        type: 'mature_vault::token::erc20_component::ERC20Component::Transfer',
      },
      {
        kind: 'nested',
        name: 'Approval',
        type: 'mature_vault::token::erc20_component::ERC20Component::Approval',
      },
    ],
  },
  {
    kind: 'enum',
    name: 'mature_vault::token::token::Token::Event',
    type: 'event',
    variants: [
      {
        kind: 'flat',
        name: 'OwnableEvent',
        type: 'openzeppelin_access::ownable::ownable::OwnableComponent::Event',
      },
      {
        kind: 'flat',
        name: 'UpgradeableEvent',
        type: 'openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event',
      },
      {
        kind: 'flat',
        name: 'ERC20Event',
        type: 'mature_vault::token::erc20_component::ERC20Component::Event',
      },
    ],
  },
];
