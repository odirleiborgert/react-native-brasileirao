
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: #ccc;
`
export const ScrollView = styled.ScrollView.attrs({
    contentContainerStyle: { paddingTop: 20, paddingBottom: 20, justifyContent: 'center' }
})`
    height: 100%;
`
export const Name = styled.Text`
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0 10px 0;
`
export const Row = styled.View`

`

