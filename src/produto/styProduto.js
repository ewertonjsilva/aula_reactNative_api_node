import { StyleSheet } from 'react-native'; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: '#FAFAFA',
        padding: 8, 
        width: '100%',
        paddingTop: '20%',
    },
    text: { 
        fontSize: 16, 
    }, 
    pesquisa: {
        flexDirection: 'row',
    }, 
    tinyLogo: {
        width: RFValue(150), 
        height: RFValue(150),                  
    }, 
    botaoPesquisa: {
        //borderWidth: 2, 
        //borderColor: '#000', 
        justifyContent: 'center',         
    }, 
    picker: {
        width: '40%', 
        height: '100%', 
    }, 
    input: {
        width: '40%', 
        marginHorizontal: 4, 
    }, 
    titulo: {
        fontSize: RFPercentage(3.5), 
        fontWeight: 'bold',         
    }, 
    containerImg: {
        alignItems: 'center', 
        margin: RFValue(10), 
        borderWidth: RFValue(3), 
        borderColor: '#7F0000', 
        borderRadius: RFValue(20), 
        overflow: 'hidden', 
        width: RFValue(149), 
        height: RFValue(149), 
    }, 
    valor: {
        fontSize: RFPercentage(3.5), 
        color: '#B71C1C',     
        textAlign: 'center',
        marginBottom: RFValue(10),  
    }, 
    containerDesc: {
        borderWidth: RFValue(3), 
        borderColor: '#7F0000', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: RFPercentage(2), 
        padding: RFPercentage(2), 
        width: '80%'
    }
});

export default styles;