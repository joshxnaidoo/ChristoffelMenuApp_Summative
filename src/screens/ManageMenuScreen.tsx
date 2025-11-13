import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';
import { Course, Dish } from '../types';
import { addDish, getMenu, removeDish } from '../menuStore';
import { Picker } from '@react-native-picker/picker';

const COURSES: Course[] = ['Starter', 'Main', 'Dessert'];

export const ManageMenuScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState<Course>('Starter');
  const [price, setPrice] = useState('');
  const [refresh, setRefresh] = useState(false);

  const menu = getMenu();

  const onAdd = () => {
    const res = addDish(name, desc, course, price);
    if (!res.ok) {
      Alert.alert('Error', res.error || 'Could not add dish.');
      return;
    }
    setName('');
    setDesc('');
    setCourse('Starter');
    setPrice('');
    setRefresh(!refresh);
  };

  const onRemove = (id: string) => {
    removeDish(id);
    setRefresh(!refresh);
  };

  const renderItem = ({ item }: { item: Dish }) => (
    <View style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.sub}>
          {item.course} • R{item.price.toFixed(2)}
        </Text>
      </View>
      <Pressable
        style={styles.deleteBtn}
        onPress={() => onRemove(item.id)}
      >
        <Text style={styles.deleteText}>Remove</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Add Menu Item</Text>

        <Text style={styles.label}>Dish Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="e.g. Truffle Risotto"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          value={desc}
          onChangeText={setDesc}
          style={[styles.input, { height: 70 }]}
          multiline
        />

        <Text style={styles.label}>Course</Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={course}
            onValueChange={(v) => setCourse(v as Course)}
          >
            {COURSES.map((c) => (
              <Picker.Item key={c} label={c} value={c} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Price (R)</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          style={styles.input}
          placeholder="e.g. 180"
          keyboardType="numeric"
        />

        <Pressable style={styles.addBtn} onPress={onAdd}>
          <Text style={styles.addText}>Add Dish</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Current Items ({menu.length})
        </Text>
        <FlatList
          extraData={refresh}
          data={menu}
          keyExtractor={(d) => d.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  card: {
    backgroundColor: '#f8f9fb',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  sectionTitle: { fontWeight: '600', marginBottom: 4 },
  label: { fontSize: 12, marginTop: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    marginTop: 2,
    backgroundColor: '#fff',
  },
  pickerWrap: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 2,
    backgroundColor: '#fff',
  },
  addBtn: {
    backgroundColor: '#1e88e5',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  addText: { color: '#fff', fontWeight: '700' },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  name: { fontWeight: '600' },
  sub: { fontSize: 12, color: '#555' },
  deleteBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#ef4444',
    borderRadius: 6,
  },
  deleteText: { color: '#fff', fontSize: 12 },
});
