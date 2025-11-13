import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Dish } from '../types';
import { getMenu, getAveragePrices } from '../menuStore';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const menu = getMenu();
  const averages = getAveragePrices();

  const renderItem = ({ item }: { item: Dish }) => (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.sub}>
          {item.course} • R{item.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel&apos;s Menu</Text>

      <View style={styles.navRow}>
        <Pressable
          style={styles.navBtn}
          onPress={() => navigation.navigate('ManageMenu')}
        >
          <Text style={styles.navText}>Manage Menu</Text>
        </Pressable>
        <Pressable
          style={styles.navBtn}
          onPress={() => navigation.navigate('Filter')}
        >
          <Text style={styles.navText}>Guest Filter</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Average Price by Course</Text>
        <Text>Starter: R{averages.Starter.toFixed(2)}</Text>
        <Text>Main: R{averages.Main.toFixed(2)}</Text>
        <Text>Dessert: R{averages.Dessert.toFixed(2)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Menu Items ({menu.length} total)
        </Text>
        {menu.length === 0 ? (
          <Text style={styles.empty}>
            No items yet. Tap &quot;Manage Menu&quot; to add dishes.
          </Text>
        ) : (
          <FlatList
            data={menu}
            keyExtractor={(d) => d.id}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  navRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 8,
  },
  navBtn: {
    flex: 1,
    backgroundColor: '#1e88e5',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  navText: { color: '#fff', fontWeight: '600', fontSize: 12 },
  card: {
    backgroundColor: '#f8f9fb',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  sectionTitle: { fontWeight: '600', marginBottom: 4 },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
  },
  name: { fontWeight: '600' },
  sub: { fontSize: 12, color: '#555' },
  empty: { color: '#777', fontStyle: 'italic', marginTop: 4 },
});
