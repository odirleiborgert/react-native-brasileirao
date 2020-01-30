
import { StyleSheet } from 'react-native';

// --------------------------------------------------------------------

// Layout

const layout = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#ccc',
    height: '100%',
  }
});

// Helpers

const form = StyleSheet.create({
  form: {
    width: '80%',
    margin: 'auto'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dotted',
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingLeft: 10,
    fontSize: 20,
    color: '#fff',
  },
});

// --------------------------------------------------------------------

// Pages

// --------------------------------------------------------------------

// Login
const login = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  }
})


// --------------------------------------------------------------------

// Dashboard
const dashboard = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  scroll: {
    // backgroundColor: '#999',
    // justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  box_number: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  box_text: {
    fontSize: 16,
  }
})


// --------------------------------------------------------------------

export default {
  layout,
  form,
  login,
  dashboard
}