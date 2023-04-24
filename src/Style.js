import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#FC3AF3",
  },
  resultText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right",
  },
  historyText: {
    color: "#8A29E6",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#8A29E6',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  buttonOther: {
    backgroundColor: '#E6297E',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90,
    flex: 2,
  },
  textButton: {
    color: "#E34253",
    fontSize: 20,
  },
});