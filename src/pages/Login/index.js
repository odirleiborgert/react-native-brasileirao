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
        <Layout style={styles.form}>
          <StatusBar backgroundColor="#F2F8FC" barStyle="dark-content" />
          <Text style={styles.title} category='h4'>Bolão do Brasileirão 2020</Text>
          <Input style={styles.input} placeholder="Usuário" />
          <Input style={styles.input} placeholder="Senha" />
          <Button icon={BackIcon} onPress={() => this.props.navigation.navigate('Dashboard')}>ENTRAR</Button>
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3366FF',
    marginTop: 15,
    marginBottom: 15,
  },
  input: {
    marginBottom: 5,
  }
})

