"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontWeight: 600,
    textAlign: "center",
    borderBottom: 1,
    color: "#3b82f6",
  },

  livello: {
    color: "#6b7280",
  },

  section: {
    marginBottom: 10,
  },
  heading: {
    flexDirection: "row",

    marginBottom: 5,
  },
  text: {
    color: "black",
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
        <Image style={styles.image} src={props.selectedImage} />
        <Text style={styles.title}>Dati Personali</Text>
        <Text style={styles.text}>
          {props.name} {props.lastName}
        </Text>

        <Text style={styles.text}>{props.email}</Text>
        <Text style={styles.text}>{props.address}</Text>
        <Text style={styles.text}>{props.postalCode}</Text>
        <Text style={styles.text}>{props.city}</Text>
        <Text style={styles.text}>{props.dateBirth}</Text>
        <Text style={styles.text}>{props.placeBirth}</Text>
        <Text style={styles.text}>{props.genere}</Text>
        <Text style={styles.text}>{props.nationality}</Text>
        <Text style={styles.text}>{props.civilStatus}</Text>
        <Text style={styles.text}>{props.license}</Text>
        <Text style={styles.text}>{props.website}</Text>
        <Text style={styles.text}>{props.linkin}</Text>

        {/*Compotenza */}
        <Text style={styles.title}>Compotenza</Text>
        {props.compFieldList?.length > 0 &&
          props.compFieldList.map((post) => (
            <>
              <Text style={styles.text}>{post.competenza}</Text>
              <Text style={styles.livello}>{post.livello}</Text>
            </>
          ))}

        {/*Lingue */}
        <Text style={styles.title}>Lingue</Text>
        {props.langFieldList?.length > 0 &&
          props.langFieldList.map((post) => (
            <>
              <Text style={styles.text}>{post.competenza}</Text>
              <Text style={styles.livello}>{post.livello}</Text>
            </>
          ))}
      </View>

      <View>
        {/*Profile */}
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.text}>{props.profileContent}</Text>
      </View>

          <View>
        {/*Formazione */}
        <Text style={styles.title}>Formazione</Text>
        {props.formDataFieldList.length > 0 && props.formDataFieldList.map((post) =>(
          <>
            <Text style={styles.text}>{post.competenza}</Text>
          </>
        ))}
      </View>


    </Page>
  </Document>
);

export const PDFView = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
};

export default MyDocument;
