import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { Dish } from '../types';

type Props = StackScreenProps<RootStackParamList, 'DishDetails'>;

export const DishDetailsScreen: React.FC<Props> = ({ route }) => {
  const dish = route.params.dish as Dish;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text>Course: {dish.course}</Text>
      <Text>Price: R{dish.price.toFixed(2)}</Text>
      <Text style={{ marginTop: 8 }}>
        {dish.description || 'No description provided.'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
});
