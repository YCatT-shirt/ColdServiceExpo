import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation, route }) => {
  const { userRole } = route.params;

  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [activeIndex5, setActiveIndex5] = useState(0);

  const handleScroll1 = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / 60);
    setActiveIndex1(index);
  };

  const handleScroll2 = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / 60);
    setActiveIndex2(index);
  };

  const handleScroll3 = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / 60);
    setActiveIndex3(index);
  };

  const handleScroll4 = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / 60);
    setActiveIndex4(index);
  };
  const handleScroll5 = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / 60);
    setActiveIndex5(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cold Service</Text>

      {/* Fila superior con 3 cuadros */}
      <View style={styles.horizontalContainer}>
        {/* Cuadro 1 - Reparación */}
        <View style={styles.squareButtonContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll1}
          >
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() => navigation.navigate('ProcesoReparacionScreen')}
            >
              <FontAwesome name="wrench" size={30} color="#fff" />
              <Text style={styles.squareButtonText}>Reporte de Reparación</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() =>
                navigation.navigate('ConsultarProcesoReparacionesScreen')
              }
            >
              <FontAwesome name="search" size={24} color="#fff" />
              <Text style={styles.squareButtonText}>Consultar Reparación</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.dotsContainer}>
            <View
              style={[
                styles.dot,
                activeIndex1 === 0 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
            <View
              style={[
                styles.dot,
                activeIndex1 === 1 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </View>
        </View>

        {/* Cuadro 2 - Costos (subido) */}
        <View style={styles.squareButtonContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll2}
          >
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() => navigation.navigate('CostoReparacionesScreen')}
            >
              <FontAwesome name="dollar" size={30} color="#fff" />
              <Text style={styles.squareButtonText}>Costo Reparaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() =>
                navigation.navigate('ConsultarCostoReparacionScreen')
              }
            >
              <FontAwesome name="list" size={24} color="#fff" />
              <Text style={styles.squareButtonText}>Consultar Costos</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.dotsContainer}>
            <View
              style={[
                styles.dot,
                activeIndex2 === 0 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
            <View
              style={[
                styles.dot,
                activeIndex2 === 1 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </View>
        </View>

        {/* Cuadro 3 - Equipos */}
        <View style={styles.squareButtonContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll3}
          >
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() => navigation.navigate('EquipoConfiguradoScreen')}
            >
              <FontAwesome name="cogs" size={30} color="#fff" />
              <Text style={styles.squareButtonText}>Equipo Configurado</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.squareButton}
              onPress={() =>
                navigation.navigate('ConsultarEquiposConfiguradosScreen')
              }
            >
              <FontAwesome name="cogs" size={24} color="#fff" />
              <Text style={styles.squareButtonText}>Ver Equipos</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.dotsContainer}>
            <View
              style={[
                styles.dot,
                activeIndex3 === 0 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
            <View
              style={[
                styles.dot,
                activeIndex3 === 1 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </View>
        </View>
      </View>

      {/* Cuadro 4 - Reportar Error (movido abajo) */}
      <View style={styles.squareButtonContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll4}
        >
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('ReportarErrorScreen')}
          >
            <FontAwesome name="bug" size={40} color="#fff" />
            <Text style={styles.squareButtonText}>Reportar Error</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('ConsultarErroresScreen')}
          >
            <FontAwesome name="exclamation-triangle" size={28} color="#fff" />
            <Text style={styles.squareButtonText}>Consultar Errores</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.dotsContainer}>
          <View
            style={[
              styles.dot,
              activeIndex4 === 0 ? styles.activeDot : styles.inactiveDot,
            ]}
          />
          <View
            style={[
              styles.dot,
              activeIndex4 === 1 ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        </View>
      </View>

      {/* Cuadro 5 - Viáticos y Licencias */}
      <View style={styles.squareButtonContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll5}
        >
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('ViaticosScreen')}
          >
            <FontAwesome name="money" size={30} color="#fff" />
            <Text style={styles.squareButtonText}>Viáticos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('LicenciasTecnicosScreen')}
          >
            <FontAwesome name="id-card" size={28} color="#fff" />
            <Text style={styles.squareButtonText}>Licencias Técnicos</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.dotsContainer}>
          <View
            style={[
              styles.dot,
              activeIndex5 === 0 ? styles.activeDot : styles.inactiveDot,
            ]}
          />
          <View
            style={[
              styles.dot,
              activeIndex5 === 1 ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        </View>
      </View>

      {/* Cuadro 5 - Reportar Error (movido abajo) */}
      <View style={styles.squareButtonContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll5}
        >
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('ViaticosScreen')}
          >
            <FontAwesome name="money" size={30} color="#fff" />
            <Text style={styles.squareButtonText}>Registrar Viáticos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate('LicenciasTecnicosScreen')}
          >
            <FontAwesome name="id-card" size={28} color="#fff" />
            <Text style={styles.squareButtonText}>Licencias Técnicos</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.dotsContainer}>
          <View
            style={[
              styles.dot,
              activeIndex5 === 0 ? styles.activeDot : styles.inactiveDot,
            ]}
          />
          <View
            style={[
              styles.dot,
              activeIndex5 === 1 ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        </View>
      </View>

      {userRole === 'admin' && (
        //<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserList')}>
        <Text style={styles.buttonText}>Servicio</Text>
        //</TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    width: '86%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  squareButtonContainer: {
    width: 110,
    height: 160,
    backgroundColor: '#0303b5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 15,
  },
  squareButton: {
    width: 80,
    height: 105,
    backgroundColor: '#0303b5',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  squareButtonText: {
    marginTop: 17,
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  inactiveDot: {
    backgroundColor: '#aaa',
  },
});

export default HomeScreen;
