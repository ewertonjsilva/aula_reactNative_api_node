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
    text: { 
        fontSize: 16, 
    }, 
    pesquisa: {
        flexDirection: 'row',
    }, 
    tinyLogo: {
        width: 100,
        height: 100,
    }
});

export default styles;