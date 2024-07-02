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
  },

  leftColumn: {
    flexDirection: "column",
    flex: 0.4, // Adjusted flex to make it smaller
    borderRightWidth: 1,
    backgroundColor: "#f3f4f6",
  },

  rightColumn: {
    flexDirection: "column",
    flex: 0.6, // Adjusted flex to make it larger
    padding: 10,
  },

  // Left div style
  LeftTitle: {
    fontWeight: "bold",
    textAlign: "center",
    borderBottom: 1,
    color: "#3b82f6",
    marginBottom: 30,
    marginTop: 30,
    fontSize: 24,
    textAlign: "center",
    
  },

  imageContainer: {
    position: "relative",
    backgroundColor: "#395a86",
    borderBottomLeftRadius: 75, 
    borderBottomRightRadius: 75, 
    alignItems: "center",
    justifyContent: "center",
    height: 140, 
    top: 0,
    left: 0,
    right: 0,
    marginBottom:30,
  },

  imageWrapper: {
    position: "absolute",
    bottom: 10,
    transform: "translateY(50%)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75, // Rounded-full
    backgroundColor: "white",
   
  },

  // Personal Data
  datiPersonaliContainer: {
    flexDirection: "row",
    marginTop: 2,
    marginBottom: 2,

  },
  datiPersonaliImage: {
    width: 20,
    height: 20,
    marginRight: 10, // Space between image and text
    marginLeft: 10, // Space between image and text
    flexDirection: "row",
    alignItems:"center",
    alignContent:"center"
  },

  textContainer: {
    flexGrow: 1,
    flexWrap: "wrap",
    width: "100%",
  },
  personalData: {
    color: "black",
    fontSize: 14,
    alignItems:"center",
    alignContent:"center"
  },

  // lingue e compotenze livello
  compLingText: {
    fontSize: 14,
    marginLeft: 10, 
  },
  livello: {
    color: "#6b7280",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 10, 
  },

  // right div style
  rightTitle: {
    fontWeight: "bold",
    borderBottom: 1,
    color: "#3b82f6",
    marginBottom: 20,
    marginTop: 20,
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
    fontWeight: "medium",
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
    color: "#6b7280",
  },

  // bg content text
  bgContext: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    flexWrap: "wrap",
    width: "100%",
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
        {props.selectedImage && (
          <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
              <Image style={styles.image} src={props.selectedImage} />
            </View>
          </View>
        )}
        <Text style={styles.LeftTitle}>Dati Personali</Text>
        {/*Personal Data */}
        {(props.name || props.lastName) &&
          datiPersonali("/images/user.png", props.name, props.lastName)}
        {props.email && datiPersonali("/images/email.png", props.email)}
        {props.phone && datiPersonali("/images/phone.png", props.phone)}
        {(props.address || props.postalCode || props.city) &&
          datiPersonali(
            "/images/house.png",
            props.address,
            props.postalCode,
            props.city
          )}
        {props.dateBirth &&
          datiPersonali("/images/calendar.png", props.dateBirth)}
        {props.placeBirth &&
          datiPersonali("/images/location.png", props.placeBirth)}
        {props.genere && datiPersonali("/images/gender.png", props.genere)}
        {props.nationality &&
          datiPersonali("/images/flag.png", props.nationality)}
        {props.civilStatus &&
          datiPersonali("/images/civil.png", props.civilStatus)}
        {props.license && datiPersonali("/images/car.png", props.license)}
        {props.website && datiPersonali("/images/globe.png", props.website)}
        {props.linkin && datiPersonali("/images/linkedin.png", props.linkin)}

        {/* Competenza */}
        {props.compFieldList?.length > 0 && (
          <>
            <Text style={styles.LeftTitle}>Compotenza</Text>
            {props.compFieldList.map((post, index) => (
              <View key={index}>
                <Text style={styles.compLingText}>{post.competenza}</Text>
                <Text style={styles.livello}>{post.livello}</Text>
              </View>
            ))}
          </>
        )}

        {/* Lingue */}
        {props.langFieldList?.length > 0 && (
          <>
            <Text style={styles.LeftTitle}>Lingue</Text>
            {props.langFieldList.map((post, index) => (
              <View key={index}>
                <Text style={styles.compLingText}>{post.competenza}</Text>
                <Text style={styles.livello}>{post.livello}</Text>
              </View>
            ))}
          </>
        )}
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
