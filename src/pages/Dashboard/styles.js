import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
    flex: 1;
    background: #ccc;
`

export const View = styled.View`
    width: 90%;
    margin: auto;
    flex: 1;
`

export const Text = styled.Text`
    font-size: 16px;
`

export const Title = styled.Text`
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const ScrollView = styled.ScrollView`
    
`



// Palpites Blocks

export const UserContainer = styled.View`
    flex-direction: row;
    padding: 5px 0;
`
export const UserBoxName = styled.View`
    width: 50%;
    justify-content: center;
    align-items: flex-start;
`
export const UserName = styled.Text`
    font-size: 16px;
`
export const UserBoxPointer = styled.View`
    width: 50%;
    justify-content: center;
    align-items: flex-end;
`
export const UserPointer = styled.Text`
    font-size: 24px;
    font-weight: bold;
`