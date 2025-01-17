export const STARKET_TESTNET_VAULT_ABI = [
  {
    name: 'Vault',
    type: 'impl',
    interface_name: 'mature_vault::vault::interface::IVault',
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
    name: 'mature_vault::vault::interface::WithdrawRequest',
    type: 'struct',
    members: [
      {
        name: 'user',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 've_strk_amount',
        type: 'core::integer::u256',
      },
      {
        name: 'expected_amount',
        type: 'core::integer::u256',
      },
      {
        name: 'start_time',
        type: 'core::integer::u64',
      },
      {
        name: 'maturity_period',
        type: 'core::integer::u64',
      },
      {
        name: 'is_completed',
        type: 'core::bool',
      },
    ],
  },
  {
    name: 'mature_vault::vault::interface::IVault',
    type: 'interface',
    items: [
      {
        name: 'get_tvl',
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
        name: 'get_ve_total_amount_to_burn',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u128',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'get_total_supply',
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
        name: 'get_total_amount_to_deposit',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u128',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'get_amount_to_withdraw',
        type: 'function',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u128',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'get_unclaimed_rewards',
        type: 'function',
        inputs: [
          {
            name: 'staking_pool',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'staker_address',
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
        name: 'get_ve_strk_to_mint',
        type: 'function',
        inputs: [
          {
            name: 'amount',
            type: 'core::integer::u256',
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
        name: 'get_strk_to_unstake',
        type: 'function',
        inputs: [
          {
            name: 've_strk_amount',
            type: 'core::integer::u256',
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
        name: 'get_request',
        type: 'function',
        inputs: [
          {
            name: 'withdrawl_index',
            type: 'core::integer::u256',
          },
        ],
        outputs: [
          {
            type: 'mature_vault::vault::interface::WithdrawRequest',
          },
        ],
        state_mutability: 'view',
      },
      {
        name: 'get_pool_balance',
        type: 'function',
        inputs: [
          {
            name: 'staking_pool',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'staker_address',
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
        name: 'set_ve_strk_token',
        type: 'function',
        inputs: [
          {
            name: 've_strk_token',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'deposit_strk',
        type: 'function',
        inputs: [
          {
            name: 'assets',
            type: 'core::integer::u256',
          },
          {
            name: 'receiver',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'initiate_withdrawal',
        type: 'function',
        inputs: [
          {
            name: 've_strk_amount',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'complete_withdrawal',
        type: 'function',
        inputs: [
          {
            name: 'withdrawl_index',
            type: 'core::integer::u256',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'admin_enter_delegation_pool',
        type: 'function',
        inputs: [
          {
            name: 'staking_pool',
            type: 'core::starknet::contract_address::ContractAddress',
          },
          {
            name: 'staker_address',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'admin_claim_rewards',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'admin_initiate_exit',
        type: 'function',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'admin_complete_exit',
        type: 'function',
        inputs: [
          {
            name: 'pool_member',
            type: 'core::starknet::contract_address::ContractAddress',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        name: 'set_delegation_pool',
        type: 'function',
        inputs: [
          {
            name: 'pool_address',
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
    name: 'constructor',
    type: 'constructor',
    inputs: [
      {
        name: 'pool',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'asset',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'owner',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'vault_withdrawal_manager',
        type: 'core::starknet::contract_address::ContractAddress',
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
    name: 'mature_vault::vault::mature_vault::mature_vault::DepositedStrk',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'receiver',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'data',
        name: 'assets',
        type: 'core::integer::u256',
      },
      {
        kind: 'data',
        name: 'is_deposited',
        type: 'core::bool',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::vault::mature_vault::mature_vault::IntitatedWithdrawl',
    type: 'event',
    members: [
      {
        kind: 'key',
        name: 'user',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'key',
        name: 'request_index',
        type: 'core::integer::u256',
      },
      {
        kind: 'data',
        name: 've_strk_amount',
        type: 'core::integer::u256',
      },
      {
        kind: 'data',
        name: 'expected_amount',
        type: 'core::integer::u256',
      },
      {
        kind: 'data',
        name: 'maturity_period',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::vault::mature_vault::mature_vault::WithdrawRequestCompleted',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'request',
        type: 'mature_vault::vault::interface::WithdrawRequest',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::vault::mature_vault::mature_vault::AdminEnteredPool',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'this',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'data',
        name: 'strk_amount',
        type: 'core::integer::u128',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::vault::mature_vault::mature_vault::AdminClaimedRewards',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'rewards',
        type: 'core::integer::u128',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::vault::mature_vault::mature_vault::AdmintCompletedExit',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'executor',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        kind: 'data',
        name: 'execute_at',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    kind: 'struct',
    name: 'mature_vault::vault::mature_vault::mature_vault::AdmintInitializedExit',
    type: 'event',
    members: [
      {
        kind: 'data',
        name: 'amount',
        type: 'core::integer::u128',
      },
      {
        kind: 'data',
        name: 'time',
        type: 'core::integer::u64',
      },
    ],
  },
  {
    kind: 'enum',
    name: 'mature_vault::vault::mature_vault::mature_vault::Event',
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
        kind: 'nested',
        name: 'DepositedStrk',
        type: 'mature_vault::vault::mature_vault::mature_vault::DepositedStrk',
      },
      {
        kind: 'nested',
        name: 'IntitatedWithdrawl',
        type: 'mature_vault::vault::mature_vault::mature_vault::IntitatedWithdrawl',
      },
      {
        kind: 'nested',
        name: 'WithdrawRequestCompleted',
        type: 'mature_vault::vault::mature_vault::mature_vault::WithdrawRequestCompleted',
      },
      {
        kind: 'nested',
        name: 'AdminEnteredPool',
        type: 'mature_vault::vault::mature_vault::mature_vault::AdminEnteredPool',
      },
      {
        kind: 'nested',
        name: 'AdminClaimedRewards',
        type: 'mature_vault::vault::mature_vault::mature_vault::AdminClaimedRewards',
      },
      {
        kind: 'nested',
        name: 'AdmintCompletedExit',
        type: 'mature_vault::vault::mature_vault::mature_vault::AdmintCompletedExit',
      },
      {
        kind: 'nested',
        name: 'AdmintInitializedExit',
        type: 'mature_vault::vault::mature_vault::mature_vault::AdmintInitializedExit',
      },
    ],
  },
];
