"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 800,
    },
  ],
});

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: 600,
    borderBottom: 1,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    textAlign: "center",
    marginTop: 5,
  },

  titleRight: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: 600,
    borderBottom: 1,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    textAlign: "left",
    marginTop: 5,
  },

  data: {
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize: 12,
  },

  imageContainer: {
    position: "relative",

    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    height: 140,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 25,
    marginTop: 0,
  },

  imageWrapper: {
    position: "absolute",
    bottom: 10,
    transform: "translateY(50%)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75, // Rounded-full
    backgroundColor: "white",
  },
});

let currentYear = new Date().getFullYear();

const datiPersonali = (image, dati, dati2) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "flex-start",
        marginVertical: 3,
      }}
    >
      <View style={{ marginRight: 3 }}>
        <Image
          style={{ width: 8, height: 8 }}
         source={{ uri: image }}
          alt={"logo picture"}
        ></Image>
      </View>
      <View>
        <Text style={{ fontWeight: "medium", fontSize: 10, marginLeft: 3 }}>
          {dati} {dati2}
        </Text>
      </View>
    </View>
  );
};

const handleCompAndLang = (data) => {
  return (
    <>
      {data.map((post, index) => (
        <View
          key={index}
          style={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.data,
              {
                whiteSpace: "normal",
                wordWrap: "break-word",
                marginTop: 3,
                textAlign: "center",
              },
            ]}
          >
            {post.competenza}
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: "10",
              whiteSpace: "normal",
              wordWrap: "break-word",
              marginTop: 3,
              textAlign: "center",
            }}
          >
            {post.livello}
          </Text>
        </View>
      ))}
    </>
  );
};

const handleProfile = (data) => {
  // Remove <br> tags
  let formattedText = data.replace(/<br\s*\/?>/gi, "");

  // Replace <p> tags with new lines
  formattedText = formattedText.replace(/<p>(.*?)<\/p>/gs, "$1\n");

  // Split the formatted text into lines
  const lines = formattedText.split("\n");

  // Render each line using Text components
  return (
    <>
      {lines.map((line, index) => (
        <Text
          key={index}
          style={{ marginTop: 2, marginBottom: 2, fontSize: 14 }}
        >
          {line}
        </Text>
      ))}
    </>
  );
};

const handleBgData = (data) => {
  return (
    <>
      {data.length > 0 &&
        data.map((post, index) => (
          <View
            style={{ display: "flex", flexDirection: "column" }}
            key={index}
          >
            <Text style={[styles.data, { marginTop: 5 }]}>{post.data}</Text>
            <Text
              style={{
                color: "blue",
                fontSize: 10,
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
            >
              {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
              {post.dataInizio} -{" "}
              {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
              {post.dataFine}
            </Text>
            {(post.istitute || post.city) && (
              <Text
                style={{
                  color: "grey",
                  fontSize: 10,
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                {post.istitute} | {post.city}
              </Text>
            )}
            {/* Render profile content using handleProfile */}
            {handleProfile(post.content)}
          </View>
        ))}
    </>
  );
};

const CardTwoDocument = (props) => {
  return (
    <Document>
      <Page>
        <View style={{ flexDirection: "row", display: "flex", flex: 1 }}>
          {/*LEft Column */}
          <View
            style={{
              flex: "0.4",
              flexDirection: "column",
              justifyContent: "flex-start",
              borderRight: 1,
              borderRightWidth: 1,
              borderRightColor: "gray",
              paddingHorizontal: 10,
              height: "100%",
            }}
          >
            <View
              style={[
                styles.imageContainer,
                { backgroundColor: props.cardColors },
              ]}
            >
              {props.selectedImage && (
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.image}
                    src={props.selectedImage}
                    alt={"profile picture"}
                  />
                </View>
              )}
            </View>

            {/*Personal Data */}
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={[styles.title, { color: props.cardColors }]}>
                  Dati Personali
                </Text>
              </View>

              <View
                style={{
                  marginTop: 2,
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "flex-start", // Changed from justifyContent to alignItems
                  marginLeft: 5,
                }}
              >
                {/*name and lastname */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    marginTop: 2,
                  }}
                >
                  {(props.name || props.lastName) && (
                    <>
                      {datiPersonali(
                        "/images/user.png",
                        props.name,
                        props.lastName
                      )}
                    </>
                  )}
                </View>

                {/*email */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {props.email && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/email.png",
                        props.email
                      )}
                    </>
                  )}
                </View>
                {/*phone */}
                <View>
                  {props.phone && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/phone.png",
                        props.phone
                      )}
                    </>
                  )}
                </View>

                {/*Address */}
                <View>
                  {(props.address || props.postalCode || props.city) && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/house.png",
                        props.address,
                        props.postalCode,
                        props.city
                      )}
                    </>
                  )}
                </View>
                {/*City */}
                <View>
                  {props.city && (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "medium",
                          fontSize: 10,
                          marginTop: 3,
                          marginLeft: 15,
                        }}
                      >
                        {props.city}
                      </Text>
                    </View>
                  )}
                </View>
                {/*Date of birth */}
                <View>
                  {props.dateBirth && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/calendar.png",
                        props.dateBirth
                      )}
                    </>
                  )}
                </View>

                {/*Place of birth */}
                <View>
                  {props.placeBirth && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/location.png",
                        props.placeBirth
                      )}
                    </>
                  )}
                </View>

                {/*Gender */}
                <View>
                  {props.genere && (
                    <>
                        {datiPersonali(
                          "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/gender.png",
                          props.genere
                        )}
                    </>
                  )}
                </View>

                {/*Nazionalita' */}
                <View>
                  {props.nationality && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/flag.png",
                        props.nationality
                      )}
                    </>
                  )}
                </View>

                {/*Civil Status */}
                <View>
                  {props.civilStatus && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/civil.png",
                        props.civilStatus
                      )}
                    </>
                  )}
                </View>
                {/*Licnese */}
                <View>
                  {props.license && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/car.png",
                        props.license
                      )}
                    </>
                  )}
                </View>

                {/*Website */}
                <View>
                  {props.website && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/globe.png",
                        props.website
                      )}
                    </>
                  )}
                </View>

                {/*lINKDN */}
                <View>
                  {props.linkin && (
                    <>
                      {datiPersonali(
                        "https://aivan-image.s3.eu-north-1.amazonaws.com/documentTwo/linkedin.png",
                        props.linkin
                      )}
                    </>
                  )}
                </View>
              </View>
            </View>

            {/*Competenze */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.title, { color: props.cardColors }]}>
                Competenze
              </Text>

              {props.compFieldList.length > 0 &&
                handleCompAndLang(props.compFieldList)}
            </View>

            {/*Lingue */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.title, { color: props.cardColors }]}>
                Lingue
              </Text>

              {props.langFieldList.length > 0 &&
                handleCompAndLang(props.langFieldList)}
            </View>
          </View>

          {/*Right column */}
          <View
            style={{
              flex: "1",
              flexDirection: "column",
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              marginLeft: 5,
            }}
          >
            {/*Profile */}
            <View
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Text style={[styles.titleRight, { color: props.cardColors }]}>
                Profilo
              </Text>
              {handleProfile(props.profileContent)}
            </View>

            {/*Istruzione */}
            <View
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Text style={[styles.titleRight, { color: props.cardColors }]}>
                Istruzione
              </Text>
              {handleBgData(props.formDataFieldList)}
            </View>

            {/*Esperienze */}
            <View
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Text style={[styles.titleRight, { color: props.cardColors }]}>
                Esperienze
              </Text>
              {handleBgData(props.exprDataFieldList)}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CardTwoDocument;
