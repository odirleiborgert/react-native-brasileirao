import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: #ccc;
`

export const ScrollView = styled.ScrollView.attrs({
    contentContainerStyle: { flexGrow: 1, justifyContent: 'center' }
})`
    background: red;
`

export const GuessContainer = styled.View`
    width: 90%;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;
    flex-direction: row;
`
export const GuessTime = styled.View`
    width: 33%;
    height: 30px;
    justify-content: center;
    align-items: center;
`
export const GuessTimeLeftName = styled.Text`
    font-size: 14px;
`

export const GuessNumber = styled.View`
    width: 13%;
    height: 30px;
    justify-content: center;
    align-items: center;
`
export const GuessNumberText = styled.Text`
    font-size: 26px;
    font-weight: bold;
`
export const GuessX = styled.View`
    width: 8%;
    height: 30px;
    justify-content: center;
    align-items: center;
`
export const GuessXText = styled.Text`
    font-size: 16px;
    color: #777;
`