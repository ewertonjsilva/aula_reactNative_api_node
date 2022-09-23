import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FAFAFA',
        padding: 8, 
        width: '100%',
    },
    pesquisa: {
        flexDirection: 'row',
    }, 
    picker: {
        width: '40%', 
        height: '100%', 
    }, 
    input: {
        width: '40%', 
        marginHorizontal: 4, 
    }, 
    botaoPesquisa: {
        //borderWidth: 2, 
        //borderColor: '#000', 
        justifyContent: 'center',         
    }, 
    itensPesquisa: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        width: '100%', 
        flexWrap: 'wrap', 
    }, 
    itemPesquisa: {
        width: '32%', 
        height: 150, 
        margin: 2, 
        padding: 3, 
        borderWidth: 1, 
        borderColor: '#000', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
    }, 
    txtTituloProd: { 
        fontSize: 16, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        fontWeight: 'bold', 
        minHeight: '15%',
        maxHeight: '30%',         
    }, 
    img: {
        width: '90%',
        height: '48%', 
        margin: 3, 
    },  
});

export default styles;