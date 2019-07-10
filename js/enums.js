const { ACTION, PRESS, TOGGLE, CUSTOM } = { ACTION: 1, PRESS: 2, TOGGLE: 3, CUSTOM: 4 }
const enums = {
  "13_CODE": {
    NAME: "REENABLE DRONE",
    COMMAND: "disableEmergency",
    TYPE: PRESS,
    KEY: "ENTER",
    PARAMS: [],
    NON_EDITABLE: true
  },
  "32_CODE": {
    NAME: "TAKEOFF",
    COMMAND: "takeoff",
    TYPE: CUSTOM,
    KEY: "SPACE",
    PARAMS: [],
    NON_EDITABLE: true
  },
  "101_CODE": {
    NAME: "CALIBRATE",
    COMMAND: "calibrate",
    TYPE: PRESS,
    KEY: "NUMPAD 5",
    PARAMS: [0],
    NON_EDITABLE: true
  },
  "16_CODE": {
    NAME: "EMERGENCY STOP",
    COMMAND: "estop",
    TYPE: CUSTOM,
    KEY: "SHIFT",
    PARAMS: [],
    NON_EDITABLE: true
  },
  "87_CODE": {
    NAME: "FRONT",
    COMMAND: "front",
    TYPE: ACTION,
    KEY: "W",
    PARAMS: [0.5]
  },
  "65_CODE": {
    NAME: "LEFT",
    COMMAND: "left",
    TYPE: ACTION,
    KEY: "A",
    PARAMS: [0.5]
  },
  "83_CODE": {
    NAME: "BACK",
    COMMAND: "back",
    TYPE: ACTION,
    KEY: "S",
    PARAMS: [0.5]
  },
  "68_CODE": {
    NAME: "RIGHT",
    COMMAND: "right",
    TYPE: ACTION,
    KEY: "D",
    PARAMS: [0.5]
  },
  "100_CODE": {
    NAME: "COUNTERCLOCKWISE",
    COMMAND: "counterClockwise",
    TYPE: ACTION,
    KEY: "NUMPAD 4",
    PARAMS: [0.5]
  },
  "102_CODE": {
    NAME: "CLOCKWISE",
    COMMAND: "clockwise",
    TYPE: ACTION,
    KEY: "NUMPAD 6",
    PARAMS: [0.5]
  },
  "104_CODE": {
    NAME: "UP",
    COMMAND: "up",
    TYPE: ACTION,
    KEY: "NUMPAD 8",
    PARAMS: [0.5]
  },
  "98_CODE": {
    NAME: "DOWN",
    COMMAND: "down",
    TYPE: ACTION,
    KEY: "NUMPAD 2",
    PARAMS: [0.5]
  },
  "49_CODE": {
    NAME: "FLIP RIGHT",
    COMMAND: "animate",
    TYPE: PRESS,
    KEY: "1",
    PARAMS: ["flipRight", 1000],
    NON_EDITABLE: true
  },
  "50_CODE": {
    NAME: "FLIP LEFT",
    COMMAND: "animate",
    TYPE: PRESS,
    KEY: "2",
    PARAMS: ["flipLeft", 1000],
    NON_EDITABLE: true
  },
  "51_CODE": {
    NAME: "FLIP FORWARD",
    COMMAND: "animate",
    TYPE: PRESS,
    KEY: "3",
    PARAMS: ["flipAhead", 1000],
    NON_EDITABLE: true
  },
  "52_CODE": {
    NAME: "FLIP BACK",
    COMMAND: "animate",
    TYPE: PRESS,
    KEY: "4",
    PARAMS: ["flipBehind", 1000],
    NON_EDITABLE: true
  }
}