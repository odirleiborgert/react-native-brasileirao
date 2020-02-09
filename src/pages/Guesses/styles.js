import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex: 1;
    background: #ccc;
`

export const ScrollView = styled.ScrollView`
`

export const ContainerScrollView = styled.ScrollView`
    width: 90%;
    margin: auto;
`

/// Palpites Blocks

export const GuessContainer = styled.View`
    width: 90%;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 50px;
    flex-direction: row;
`
export const GuessTime = styled.View`
    width: 33%;
    height: 50px;
    justify-content: center;
    align-items: center;
`
export const GuessTimeLeftName = styled.Text`
    font-size: 14px;
`
export const GuessNumber = styled.View`
    width: 13%;
    height: 50px;
    border: 1px #aaa solid;
`
export const GuessX = styled.View`
    width: 8%;
    height: 50px;
    justify-content: center;
    align-items: center;
`
export const GuessXText = styled.Text`
    font-size: 16px;
`
