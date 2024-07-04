"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },

  hrLeftSection: {
    height: 1,
    backgroundColor: "orange",
    width: "50%", // Half the width of the container
    alignSelf: "center", // Center horizontally
    marginVertical: 10,
  },

  hrRightSection:{
    height: 1,
    backgroundColor: "orange",
    width: "50%", // Half the width of the container
    alignSelf: "flex-start", // Center horizontally
    marginVertical: 10,
  },

  leftColumn: {
    flex: 0.4,
    backgroundColor: "#dee4eb",
    flexDirection: "column",
    alignItems: "items",
  },

  rightColumn: {
    flex: 0.6,
    flexDirection: "column",
    marginLeft: "20",
    marginTop: "20",
  },

  section: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  sectionLeftTitle: {
    fontSize: 36,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },

  sectionRightTitle: {
    fontSize: 36,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
  },

  sectionData: {
    textAlign: "center",
  },

  personalData: {
    marginLeft: 5,
    marginTop: 10,
    textAlign: "left",
  },

  //LEFT SIDE DIV STYLING
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    border: 1,
    borderColor: "orange",
    padding: 6,
  },
});

let currentYear = new Date().getFullYear();
const DocumentDaki = (props) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/*Left Column */}
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionLeftTitle}>Dati Personali</Text>
            <View>
              <Image style={styles.image} src={props.selectedImage} />
            </View>

            <View style={styles.sectionData}>
              <Text style={styles.personalData}>
                {props.name} {props.lastName}
              </Text>
              <Text style={styles.personalData}>{props.email}</Text>
              <Text style={styles.personalData}>{props.phone}</Text>
              <Text style={styles.personalData}>
                {props.address} {props.postalCode} {props.city}
              </Text>
              <Text style={styles.personalData}>{props.dateBirth}</Text>
              <Text style={styles.personalData}>{props.placeBirth}</Text>
              <Text style={styles.personalData}>{props.genere}</Text>
              <Text style={styles.personalData}>{props.nationality}</Text>
              <Text style={styles.personalData}>{props.civilStatu}</Text>
              <Text style={styles.personalData}>{props.license}</Text>
              <Text style={styles.personalData}>{props.website}</Text>
              <Text style={styles.personalData}>{props.linkin}</Text>
            </View>
          </View>

          <View style={styles.hrLeftSection} />

          {/*Competence */}
          <View style={styles.section}>
            <Text style={styles.sectionLeftTitle}>Compotenza</Text>
            {props.compFieldList.map((post, index) => (
              <View wrap={false} key={index} style={styles.sectionData}>
                <Text style={{ fontWeight: "medium", textAlign: "center" }}>
                  {post.competenza}
                </Text>
                <Text style={{ color: "grey", textAlign: "center" }}>
                  {post.livello}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.hrLeftSection} />

          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionLeftTitle}>Lingue</Text>
            {props.langFieldList.map((post, index) => (
              <View  key={index} style={styles.sectionData}>
                <Text style={{ fontWeight: "medium", textAlign: "center" }}>
                  {post.competenza}
                </Text>
                <Text style={{ color: "grey", textAlign: "center" }}>
                  {post.livello}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.hrLeftSection} />
        </View>

        {/*Right Column */}
        <View style={styles.rightColumn}>
          {/*Name and Lat Name */}
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: "48" }}>{props.name}</Text>
            <Text style={{ color: "gray", marginTop: 5, fontSize: "48" }}>
              {props.lastName}
            </Text>
          </View>
          <View style={styles.hrRightSection} />
          {/*Profile */}
          <View>
            <Text style={styles.sectionRightTitle}>Profilo</Text>
            <Text>{props.profileContent?.replace(/<\/?[^>]+(>|$)/g, "")}</Text>
          </View>
          <View style={styles.hrRightSection} />

          {/*Istruzione */}

        </View>
      </Page>
    </Document>
  );
};

export default DocumentDaki;
