const gc = {
  DEFAULT_STAT: 'ace',
  DEFAULT_NORMALIZATION: 'percent',
  DEFAULT_REVERSE: 'false',
  DEFAULT_LIMIT: 5,
  STAT_TO_DISPLAY_NAME: {
    'ace': 'aces',
    'ptWin': 'points won',
    'svcPtWin': 'service points won',
    'dblFault': 'double faults',
    'pagerank': 'The GOAT algorithm',
  },
  NORMALIZATION_TO_DISPLAY_NAME: {
    'count': 'raw count',
    'percent': 'percent',
    'time-decay': 'time decay',
  },
  REVERSE_VALUES: ['true', 'false'],
  LIMIT_VALUES: [3, 5, 8, 14],
}

export default gc
