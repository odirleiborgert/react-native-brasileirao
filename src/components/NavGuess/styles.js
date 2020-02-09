import styled from 'styled-components/native'


export const Item = styled.View`
    
    justify-content: center;
    align-items: flex-start;
    margin-right: 10px;
    height: 50px;
    padding-bottom: 10px;
`

export const ScrollView = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 20, paddingRight: 10 },
    showsHorizontalScrollIndicator: false,
})``
