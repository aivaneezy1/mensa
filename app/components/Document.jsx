import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#3f4181",
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    color: "#ffffff",
    marginBottom: 5,
  },
  text: {
    color: "#ffffff",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

const MyDocument = (props) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Name:</Text>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Email:</Text>
        <Text style={styles.text}>{props.email}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Phone:</Text>
        <Text style={styles.text}>{props.phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education:</Text>
        <Text style={styles.text}>{props.education}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experience:</Text>
        <Text style={styles.text}>{props.experience}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Skills:</Text>
        <Text style={styles.text}>{props.skills}</Text>
      </View>

      
      {props.images && (
        <View style={styles.section}>
          <Text style={styles.heading}>Photo:</Text>
          <Image src={URL.createObjectURL(props.images)} style={styles.image} />
        </View>
      )}
    </Page>

    
  </Document>
);

export default MyDocument;
