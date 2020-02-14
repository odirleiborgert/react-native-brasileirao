import React from 'react';

import { StatusBar } from 'react-native'

import { Layout, Input, Button, Text, StyleService } from '@ui-kitten/components'

import { Icon } from 'react-native-eva-icons'

export const BackIcon = () => (
  <Icon name='arrow-forward-outline' width={20} height={20} />
);

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={styles.container}>
        <StatusBar backgroundColor="#F2F8FC" barStyle="dark-content" />
        <Layout style={styles.form}>
          <Text style={styles.title} category='h4'>Bolão do</Text>
          <Text style={styles.subtitle} category='h5'>Brasileirão</Text>
          <Text style={styles.number} category='h2'>2020</Text>
          <Input style={styles.input} placeholder="Usuário" />
          <Input style={styles.input} placeholder="Senha" />
          <Button style={styles.button} icon={BackIcon} onPress={() => this.props.navigation.navigate('Dashboard')}>ENTRAR</Button>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: 'transparent',
    width: '80%',
    margin: 'auto',
  },
  title: {
    lineHeight: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#03b7d8',
  },
  subtitle: {
    lineHeight: 40,
    fontSize: 36,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#03b7d8',
  },
  number: {
    lineHeight: 60,
    fontSize: 60,
    fontWeight: 'bold',
    color: '#03b7d8',
    marginBottom: 15,
  },
  input: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#03b7d8',
    borderColor: '#07b0d0'
  }
})

