import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: #ccc;
`

export const ScrollView = styled.ScrollView.attrs({
    contentContainerStyle: { paddingTop: 20, justifyContent: 'center' }
})`
    height: 100%;
`
