
import { StyleSheet, Text, View, Image } from 'react-native';
export default function Biografia() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Biografia</Text>
            <Image
                source={require('../assets/perfil.jpeg')}
                style={{ width: 150, height: 150, borderRadius: 100 }}
            />
            <View>
                <Text style={styles.description}>
                    Mi nombre es Josue, tengo 21 años y soy estudiante de ingeniería de software. Me apasiona la programación y disfruto aprender nuevas tecnologías. En mi tiempo libre, me gusta jugar videojuegos y ver series de terror.
                    {'\n\n'}
                    Yo soy de San juan del rio ,Queretaro, en los fines de semana trabajo en un negocio familiar de venta de barbacoa y disfruto pasar tiempo con mi familia y amigos.
                </Text>
            </View>
            <View style={styles.images}><Image
                source={require('../assets/barbacoa.jpg')}
                style={{ width: 150, height: 150, borderRadius: 100 }}
            /><Image
                    source={require('../assets/sanjuan.jpg')}
                    style={{ width: 120, height: 120, }}
                /></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000ff',
        paddingTop: 50,
        alignItems: 'center',
    },
    title: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'justify',
        padding: 25,
    },
    images: {
        flexDirection: 'row',
        gap: 50,
        marginTop: 20,
    }
});
