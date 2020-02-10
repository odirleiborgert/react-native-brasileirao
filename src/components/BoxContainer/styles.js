import styled from 'styled-components/native'

export const BoxScrollView = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 20, paddingRight: 10 },
    showsHorizontalScrollIndicator: false,
})``

export const BoxTitle = styled.Text`
    font-size: 22px; 
    padding-left: 20px;
    margin: 3px 0;
`
export const BoxView = styled.View`
    height: 160px;
    padding: 10px 0;
    justify-content: center;
    align-items: flex-start;
`