import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Course, Dish } from '../types';
import { getByCourse } from '../menuStore';

const COURSES: Course[] = ['Starter', 'Main', 'Dessert'];

export const FilterScreen: React.FC = () => {
  const [selected, setSelected] = useState<Course>('Starter');
  const dishes = getByCourse(selected);

  const renderItem = ({ item }: { item: Dish }) => (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.sub}>R{item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest View — Filter by Course</Text>

      <View style={styles.chips}>
        {COURSES.map((c) => (
          <Pressable
            key={c}
            onPress={() => setSelected(c)}
            style={[
              styles.chip,
              selected === c && styles.chipActive,
            ]}
          >
            <Text
              style={[
                styles.chipText,
                selected === c && styles.chipTextActive,
              ]}
            >
              {c}
            </Text>
          </Pressable>
        ))}
      </View>

      {dishes.length === 0 ? (
        <Text style={styles.empty}>
          No {selected.toLowerCase()}s available yet.
        </Text>
      ) : (
        <FlatList
          data={dishes}
          keyExtractor={(d) => d.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 10 },
  chips: { flexDirection: 'row', marginBottom: 10 },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1e88e5',
    marginRight: 6,
  },
  chipActive: { backgroundColor: '#1e88e5' },
  chipText: { fontSize: 12, color: '#1e88e5' },
  chipTextActive: { color: '#fff' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
  },
  name: { fontWeight: '600' },
  sub: { fontSize: 12, color: '#555' },
  empty: { color: '#777', marginTop: 10 },
});
