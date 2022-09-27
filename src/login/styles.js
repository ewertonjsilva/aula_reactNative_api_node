import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FAFAFA',
        padding: 8, 
        width: '100%',
    }, 
    text: { 
        fontSize: 24, 
        color: '#7F0000'
    }, 
    input:{
        borderColor: '#7F0000', 
        borderWidth: 4, 
        borderRadius: 20, 
        width: '80%', 
        marginVertical: 8, 
        fontSize: 20, 
        textAlign: 'center', 
        padding: 8, 
    }, 
    btnCadUsu: {
        width: '80%'
    }, 
    txtCadUsu: {
        textAlign: 'right', 
        paddingHorizontal: 10, 
        color: '#7F0000'
    }, 
    btnEntrar: { 
        borderColor: '#7F0000', 
        borderWidth: 4, 
        borderRadius: 20,
        width: '80%', 
        marginVertical: 32,  
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#7F0000'
    }, 
    txtEntrar: {
        fontSize: 20, 
        textAlign: 'center', 
        padding: 8, 
        color: '#FAFAFA', 
        fontWeight: 'bold', 
        paddingHorizontal: 32
    }
});

export default styles;