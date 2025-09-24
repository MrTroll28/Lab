import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface ProductCardProps {
  image?: ImageSourcePropType;
  title?: string;
  rating?: number;
  reviews?: number;
  price?: string;
  oldPrice?: string;
  onChooseColor?: () => void;
  onBuy?: () => void;
}

export default function ProductCard({
  image,
  title,
  rating,
  reviews,
  price,
  oldPrice,
  onChooseColor,
  onBuy,
}: ProductCardProps) {
  const safeRating = rating ?? 0;
  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating - fullStars >= 0.5;

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <View style={styles.row}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <Text key={i}>⭐</Text>
        ))}
        {halfStar && <Text>⭐️</Text>}
        <Text style={styles.reviewText}>(Xem {reviews} đánh giá)</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{price}</Text>
        {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
      </View>

      <Text style={styles.guarantee}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.colorBtn} onPress={onChooseColor}>
          <Text style={styles.colorBtnText}>4 MÀU - CHỌN MÀU</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyBtn} onPress={onBuy}>
          <Text style={styles.buyBtnText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1f2937",
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  reviewText: {
    fontSize: 16,
    color: "#6b7280",
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#dc2626",
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 16,
    color: "#9ca3af",
    textDecorationLine: "line-through",
  },
  guarantee: {
    fontSize: 12,
    fontWeight: "600",
    color: "#dc2626",
    marginTop: 4,
  },
  actionRow: {
    marginTop: 12,
  },
  colorBtn: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 24,
    paddingVertical: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  colorBtnText: {
    fontSize: 20,
    fontWeight: "500",
  },
  buyBtn: {
    backgroundColor: "#dc2626",
    borderRadius: 24,
    paddingVertical: 8,
    alignItems: "center",
  },
  buyBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
});
