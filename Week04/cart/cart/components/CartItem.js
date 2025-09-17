import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CartItemType } from "../Types/types";

type Props = {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
};

const CartItem: React.FC<Props> = ({ item, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.supplier}>Cung cấp bởi {item.supplier}</Text>
        <View style={styles.quantityRow}>
          <TouchableOpacity style={styles.btn} onPress={onDecrease}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity style={styles.btn} onPress={onIncrease}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  image: { width: 60, height: 80, marginRight: 10 },
  info: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 14 },
  supplier: { fontSize: 12, color: "#666" },
  quantityRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  btn: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  quantity: { marginHorizontal: 10 },
  price: { color: "red", fontWeight: "bold", alignSelf: "center" },
});
