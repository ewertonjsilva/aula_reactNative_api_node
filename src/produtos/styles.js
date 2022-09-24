import { StyleSheet, Dimensions } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

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
        //flexDirection: 'row', 
        //justifyContent: 'center', 
        //width: '100%', 
        //flexWrap: 'wrap', 
        //era usado para deixar os itens estáticos lado a lado
    }, 
    flat: {
        flex: 1, 
        marginBottom: Dimensions.get('window').height / 12, 
    }, 
    itemPesquisa: {
        width: (Dimensions.get('window').width / 3) - 10, 
        height: Dimensions.get('window').height / 4,  
        margin: 2, 
        padding: 3, 
        borderWidth: 1, 
        borderColor: '#000', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
    }, 
    txtTituloProd: { 
        //fontSize: 16, 
        fontSize: RFPercentage(2.8),
        textAlign: 'center', 
        textAlignVertical: 'center', 
        fontWeight: 'bold', 
        height: '30%'
    }, 
    img: {
        width: '90%',
        height: '48%', 
        margin: 3, 
        borderRadius: 10, 
    },  
});

export default styles;