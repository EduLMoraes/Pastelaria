import React, {Component} from 'react'
import {Text,TouchableOpacity, TextInput, View, H1} from 'react-native'

import MeuEstilo from './src/meuestilo'

export default class App extends React.Component{
  state={
      pastelCarne:0.0,
      ca:5.0,
      pastelQueijo:0.0,
      pq:3.0,
      pagar:0.0,
      pagar2:0.0,
      pagar3:0.0
  }

  atualizaPastelCarne=(number)=>{
      this.setState({pastelCarne:number})
  }

  atualizaPastelQueijo=(number)=>{
      this.setState({pastelQueijo:number})
  }
  
  ajuda=()=>{
    alert("Escolha a seu lanche digitando a quantidade que deseja do mesmo, caso não queira algum dos pastéis listados apenas não preencha")
  }

  somar=(pastelCarne, ca, pq, pastelQueijo, pagar, pagar2, pagar3)=>{
     pagar = parseFloat(pastelCarne)*parseFloat(pq)
     pagar2= parseFloat(pastelQueijo)*parseFloat(ca)
     pagar3= parseFloat(pagar) + parseFloat(pagar2)

      alert(' Total a pagar: R$'+ pagar3 + ",00")
  }

  render(){
      return(
          <View style={MeuEstilo.container}>
              
            <TouchableOpacity style={MeuEstilo.ajuda}
              onPress={
                  ()=>this.ajuda()
              }>
                  <Text style={MeuEstilo.Text2}>??????HELP???????</Text>
            </TouchableOpacity>

            <Text style={MeuEstilo.Text}>Pastel de Queijo: R$3,00</Text>
              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaPastelCarne}
              keyboardType='numeric' />

              <Text style={MeuEstilo.Text}>Pastel de Carne: R$5,00</Text>
              <TextInput style={MeuEstilo.input} underlineColorAndroid="transparent"
              placeholder="0"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.atualizaPastelQueijo}
              keyboardType='numeric' />

              <TouchableOpacity style={MeuEstilo.submitButton}
              onPress={
                  ()=>this.somar(this.state.pastelCarne, this.state.pastelQueijo, this.state.pq, this.state.ca, this.state.pagar)
              }>
                  <Text style={MeuEstilo.submitButtonText}>CONFIRMAR COMPRA</Text>
              </TouchableOpacity>
          </View>
      )
  }
}