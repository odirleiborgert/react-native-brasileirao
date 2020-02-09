import styled from 'styled-components/native'

export const Text = styled.Text`
    font-size: 15px;
    font-weight: bold;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
`

export const Item = styled.View`
    
    justify-content: center;
    align-items: flex-start;
    border: 1px #000 solid;
`

export const ScrollView = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 20, paddingRight: 10 },
    showsHorizontalScrollIndicator: false,
})`
    padding: 10px 0 20px 0;
`
