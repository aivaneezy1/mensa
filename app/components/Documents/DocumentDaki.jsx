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
    marginTop: 20,
    marginBottom: 20,
  },

  hrRightSection: {
    height: 1,
    backgroundColor: "orange",
    width: "50%", // Half the width of the container
    alignSelf: "flex-start", // Center horizontally
    marginTop: 20,
    marginBottom: 20,
  },

  leftColumn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "items",
    padding: 20,
  },

  rightColumn: {
    flex: 1,
    flexDirection: "column",
    marginLeft: "10",
    marginTop: "20",
    padding: 20,
  },

  section: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  sectionLeftTitle: {
    fontSize: 34,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },

  sectionRightTitle: {
    fontSize: 34,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
  },

  sectionData: {
    textAlign: "center",
  },

  personalData: {
    marginLeft: 5,
    marginTop: 8,
    textAlign: "left",
    fontSize: "16",
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

const handlePersonalData = (data, data2, data3) => {
  return (
    <>
      <View style={styles.sectionData}>
        <Text style={styles.personalData}>
          {data} {data2}
        </Text>
      </View>
      {data3 && (
        <View style={{ textAlign: "center", marginTop: "8" }}>
          <Text style={{ color: "grey", fontSize: "16" }}>{data3}</Text>
        </View>
      )}
    </>
  );
};

const handleCompAndLang = (data) => {
  return (
    <>
      {data.map((post, index) => (
        <View wrap={false} key={index} style={styles.sectionData}>
          <View style={{ textAlign: "center" }}>
            <Text style={{ fontWeight: "medium", fontSize: "16" }}>
              {post.competenza}
            </Text>
          </View>
          <View style={{ textAlign: "center" }}>
            <Text style={{ color: "grey", fontSize: "16" }}>
              {post.livello}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

const handleProfile = (data) => {
  return (
    <>
      <Text style={styles.sectionRightTitle}>Profilo</Text>
      <Text style={{ marginBottom: 5, fontSize: "14" }}>
        {data.replace(/<\/?[^>]+(>|$)/g, "")}
      </Text>
    </>
  );
};

const handleBgData = (data) => {
  return (
    <>
      {data.length > 0 &&
        data.map((post, index) => (
          <View key={index} style={{ marginBottom: "4" }}>
            <Text style={{ fontWeight: "bold", fontSize: "16" }}>
              {post.data}
            </Text>
            <Text
              style={{ color: "blue", fontWeight: "semibold", fontSize: "12" }}
            >
              {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
              {post.dataInizio} -{" "}
              {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
              {post.dataFine}
            </Text>
            {(post.istitute || post.cit) && (
              <Text
                style={{
                  color: "grey",
                  fontWeight: "semibold",
                  marginTop: "5",
                  fontSize: "12 ",
                }}
              >
                {post.istitute} | {post.city}
              </Text>
            )}

            <Text style={{ marginTop: "5", fontSize: "16" }}>
              {post.content
                ?.replace(/<\/?[^>]+(>|$)/g, "")
                .replace(/\./g, ".\u200B")}
            </Text>
          </View>
        ))}
    </>
  );
};

let currentYear = new Date().getFullYear();

const DocumentDaki = (props) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/*Left Column */}
        <View
          style={[styles.leftColumn, { backgroundColor: props.cardColors }]}
        >
          <View style={styles.section}>
            <Text style={styles.sectionLeftTitle}>Dati</Text>
            <View>
              {props.selectedImage && (
                <Image style={styles.image} src={props.selectedImage} />
              )}
            </View>
            {/*Personal Data */}
            {(props.name || props.lastName) &&
              handlePersonalData(props.name, props.lastName)}
            {props.email && handlePersonalData(props.email)}
            {props.phone && handlePersonalData(props.phone)}
            {(props.address || props.postalCode || props.city) &&
              handlePersonalData(props.address, props.postalCode, props.city)}
            {props.dateBirth && handlePersonalData(props.dateBirth)}
            {props.placeBirth && handlePersonalData(props.placeBirth)}
            {props.genere && handlePersonalData(props.genere)}
            {props.nationality && handlePersonalData(props.nationality)}
            {props.civilStatus && handlePersonalData(props.civilStatus)}
            {props.license && handlePersonalData(props.license)}
            {props.website && handlePersonalData(props.website)}
            {props.linkin && handlePersonalData(props.linkin)}
          </View>

          <View style={styles.hrLeftSection} />

          {/*Competence */}
          <View style={styles.section}>
            <Text style={styles.sectionLeftTitle} wrap={false}>
              Compotenza
            </Text>
            {handleCompAndLang(props.compFieldList)}
          </View>

          <View style={styles.hrLeftSection} />

          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionLeftTitle}>Lingue</Text>
            {handleCompAndLang(props.langFieldList)}
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
          <View>{handleProfile(props.profileContent)}</View>
          <View style={styles.hrRightSection} />

          {/*Istruzione */}
          <View>
            <Text style={styles.sectionRightTitle}>Istruzione</Text>
            {props.formDataFieldList.length > 0 &&
              handleBgData(props.formDataFieldList)}
          </View>
          <View style={styles.hrRightSection} />

          {/*Esperienze lavorativa */}
          <View wrap={false}>
            <Text
              style={[styles.sectionRightTitle, { flexGrow: "1" }]}
              numberOfLines={1}
            >
              Esperienze
            </Text>
            {props.exprDataFieldList.length > 0 &&
              handleBgData(props.exprDataFieldList)}
          </View>
          <View style={styles.hrRightSection} />
        </View>
      </Page>
    </Document>
  );
};

export default DocumentDaki;
