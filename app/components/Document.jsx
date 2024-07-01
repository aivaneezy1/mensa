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
    flex: 0.4, // Adjusted flex to make it smaller
    padding: 10,
    borderRight: 1,
    backgroundColor: "#f3f4f6",
  },

  rightColumn: {
    flexDirection: "column",
    flex: 0.6, // Adjusted flex to make it larger
    padding: 10,
  },

  // Left div style
  LeftTitle: {
    fontWeight: 600,
    textAlign: "center",
    borderBottom: 1,
    color: "#3b82f6",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 24,
    textAlign: "center",
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
  },

  // Personal Data
  datiPersonaliContainer: {
    flexDirection: "row",
    marginTop:2,
    marginBottom:2,
  },
  datiPersonaliImage: {
    width: 20,
    height: 20,
    marginRight: 10, // Space between image and text
  },

  textContainer: {
    flexGrow: 1,
    flexWrap: "wrap",
    width: "100%",
  },
  personalData: {
    color: "black",
    fontSize: 14,
  },

  // lingue e compotenze livello
  compLingText: {
    fontSize: 14,
  },
  livello: {
    color: "#6b7280",
    fontSize: 14,
    marginTop: 2,
  },

  // right div style
  rightTitle: {
    fontWeight: 600,
    borderBottom: 1,
    color: "#3b82f6",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 24,
    textAlign: "left",
  },

  // profle style
  textProfile: {
    fontSize: 14,
  },
  // bg container
  dateContainer: {
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
  },

  // bgData
  bgData: {
    fontSize: 14,
    fontWeight: 500,
    marginTop: 5,
    marginBottom: 5,
  },

  // bg date
  dateText: {
    color: "#3b82f6",
    fontSize: 12,
    marginTop: 2,
    marginBottom: 2,
  },

  //bg azinda e city
  bgPlace: {
    fontSize: 14,
    marginTop: 2,
    marginBottom: 2,
  },

  // bg content text
  bgContext: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
});

let currentYear = new Date().getFullYear();

const datiPersonali = (image, dati, dati2, dati3, dati4) => {
  return (
    <View style={styles.datiPersonaliContainer}>
      <View style={styles.datiPersonaliImage}>
        <Image src={image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.personalData}>
          {" "}
          {dati} {dati2}
        </Text>
        <Text style={styles.personalData}>
          {" "}
          {dati3} {dati4}
        </Text>
      </View>
    </View>
  );
};

const MyDocument = (props) => (
  <Document>
    <Page style={styles.page}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        <Image style={styles.image} src={props.selectedImage} />
        <Text style={styles.LeftTitle}>Dati Personali</Text>


        {/*Personal Data */}
        {datiPersonali("/images/user.png", props.name, props.lastName)}
        {datiPersonali("/images/email.png", props.email)}
   
        {datiPersonali("/images/phone.png", props.phone)}
        {datiPersonali(
          "/images/house.png",
          props.address,
          props.postalCode,
          props.city
        )}
        {datiPersonali("/images/calendar.png", props.dateBirth)}
        {datiPersonali("/images/location.png", props.placeBirth)}
        {datiPersonali("/images/gender.png", props.genere)}
        {datiPersonali("/images/flag.png", props.nationality)}
        {datiPersonali("/images/civil.png", props.civilStatus)}
        {datiPersonali("/images/car.png", props.license)}
        {datiPersonali("/images/globe.png", props.website)}
        {datiPersonali("/images/linkedin.png", props.linkin)}

        {/* <View style={styles.datiPersonaliContainer}>
        <Text style={styles.personalData}>
          {props.name} {props.lastName}
        </Text>
        <Text style={styles.personalData}>{props.email}</Text>
        <Text style={styles.personalData}>{props.address}</Text>
        <Text style={styles.personalData}>{props.postalCode}</Text>
        <Text style={styles.personalData}>{props.city}</Text>
        <Text style={styles.personalData}>{props.dateBirth}</Text>
        <Text style={styles.personalData}>{props.placeBirth}</Text>
        <Text style={styles.personalData}>{props.genere}</Text>
        <Text style={styles.personalData}>{props.nationality}</Text>
        <Text style={styles.personalData}>{props.civilStatus}</Text>
        <Text style={styles.personalData}>{props.license}</Text>
        <Text style={styles.personalData}>{props.website}</Text>
        <Text style={styles.personalData}>{props.linkin}</Text>
        </View> */}

        {/* Competenza */}
        <Text style={styles.LeftTitle}>Competenza</Text>
        {props.compFieldList?.length > 0 &&
          props.compFieldList.map((post, index) => (
            <View key={index}>
              <Text style={styles.compLingText}>{post.competenza}</Text>
              <Text style={styles.livello}>{post.livello}</Text>
            </View>
          ))}

        {/* Lingue */}
        <Text style={styles.LeftTitle}>Lingue</Text>
        {props.langFieldList?.length > 0 &&
          props.langFieldList.map((post, index) => (
            <View key={index}>
              <Text style={styles.compLingText}>{post.competenza}</Text>
              <Text style={styles.livello}>{post.livello}</Text>
            </View>
          ))}
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>
        {/* Profile */}
        <Text style={[styles.rightTitle]}>Profile</Text>
        <Text style={styles.textProfile}>
          {props.profileContent
            .replace(/<\/?[^>]+(>|$)/g, "")
            .replace(/\./g, ".\u200B")}
        </Text>

        {/* Formazione */}
        <Text style={[styles.rightTitle]}>Formazione</Text>
        {props.formDataFieldList.length > 0 &&
          props.formDataFieldList.map((post, index) => (
            <View key={index} style={styles.dateContainer}>
              <Text style={styles.bgData}>{post.data}</Text>
              <Text style={[styles.dateText]}>
                {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
                {post.dataInizio} -{" "}
                {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
                {post.dataFine}
              </Text>
              <Text style={styles.bgPlace}>
                {post.istitute}, {post.city}
              </Text>
              <Text style={styles.bgContext}>
                {post.content
                  ?.replace(/<\/?[^>]+(>|$)/g, "")
                  .replace(/\./g, ".\u200B")}
              </Text>
            </View>
          ))}

        {/* Experience */}
        <Text style={[styles.rightTitle]}>Experience</Text>
        {props.exprDataFieldList.length > 0 &&
          props.exprDataFieldList.map((post, index) => (
            <View key={index} style={styles.dateContainer}>
              <Text style={styles.bgData}>{post.data}</Text>
              <Text style={[styles.dateText]}>
                {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
                {post.dataInizio} -{" "}
                {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
                {post.dataFine}
              </Text>
              <Text style={styles.bgPlace}>
                {post.istitute}, {post.city}
              </Text>
              <Text style={styles.bgContext}>
                {post.content
                  ?.replace(/<\/?[^>]+(>|$)/g, "")
                  .replace(/\./g, ".\u200B")}
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
