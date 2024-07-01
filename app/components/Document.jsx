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
    flexDirection: "row",
    padding: 20,
    marginTop: 50,
  },

  leftColumn: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
    borderRight: 1,
    width: 1 / 2,
  },

  rightColumn: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
    width: 1 / 2,
  },
  title: {
    fontWeight: 600,
    textAlign: "center",
    borderBottom: 1,
    color: "#3b82f6",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 24,
  },
  livello: {
    color: "#6b7280",
  },
  section: {
    marginBottom: 10,
  },
  text: {
    color: "black",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
  },

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  dateText: {
    color: "#3b82f6",
    fontSize: 14,
    marginLeft: 5,
  },
});

let currentYear = new Date().getFullYear();

const MyDocument = (props) => (
  <Document>
    <Page style={styles.page}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
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

        {/* Competenza */}
        <Text style={styles.title}>Competenza</Text>
        {props.compFieldList?.length > 0 &&
          props.compFieldList.map((post, index) => (
            <View key={index}>
              <Text style={styles.text}>{post.competenza}</Text>
              <Text style={styles.livello}>{post.livello}</Text>
            </View>
          ))}

        {/* Lingue */}
        <Text style={styles.title}>Lingue</Text>
        {props.langFieldList?.length > 0 &&
          props.langFieldList.map((post, index) => (
            <View key={index}>
              <Text style={styles.text}>{post.competenza}</Text>
              <Text style={styles.livello}>{post.livello}</Text>
            </View>
          ))}
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>
        {/* Profile */}
        <Text style={[styles.title, { textAlign: "left" }]}>Profile</Text>
        <Text style={styles.text}>
          {props.profileContent
            .replace(/<\/?[^>]+(>|$)/g, "")
            .replace(/\./g, ".\u200B")}
        </Text>

        {/* Formazione */}
        <Text style={[styles.title, { textAlign: "left" }]}>Formazione</Text>
        {props.formDataFieldList.length > 0 &&
          props.formDataFieldList.map((post, index) => (
            <View key={index}>
              <Text style={styles.text}>{post.data}</Text>
              <Text style={styles.text}>{post.istitute}</Text>
              <Text style={styles.text}>{post.city}</Text>
              <Text style={styles.text}>
                {post.content
                  ?.replace(/<\/?[^>]+(>|$)/g, "")
                  .replace(/\./g, ".\u200B")}
              </Text>
              <Text style={[styles.dateText, { color: "#3b82f6" }]}>
                {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
                {post.dataInizio} -{" "}
                {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
                {post.dataFine}
              </Text>
            </View>
          ))}

        {/* Experience */}
        <Text style={[styles.title, { textAlign: "left" }]}>Experience</Text>
        {props.exprDataFieldList.length > 0 &&
          props.exprDataFieldList.map((post, index) => (
            <View key={index}>
              <Text style={styles.text}>{post.data}</Text>
              <Text style={styles.text}>{post.istitute}</Text>
              <Text style={styles.text}>{post.city}</Text>
              <Text style={styles.text}>
                {post.content
                  ?.replace(/<\/?[^>]+(>|$)/g, "")
                  .replace(/\./g, ".\u200B")}
              </Text>
              <Text style={[styles.dateText, { color: "#3b82f6" }]}>
                {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
                {post.dataInizio} -{" "}
                {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
                {post.dataFine}
              </Text>
            </View>
          ))}
      </View>
    </Page>
  </Document>
);

export const PDFView = (props) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFViewer width="100%" height="600">
      <MyDocument {...props} />
    </PDFViewer>
  );
};

export default MyDocument;
