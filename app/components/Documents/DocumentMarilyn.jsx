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

  data:{
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize:12
  }
});

const DocumentMarilyn = (props) => {
  let currentYear = new Date().getFullYear();

  const datiPersonali = (image, dati, dati2) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 3,
        }}
      >
        <View style={{ marginRight: 3 }}>
          <Image style={{ width: "8", height: "8" }} src={image}></Image>
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
          <View key={index} style={{dispaly:"flex", justifyContent:"center", alignItems:"center"}}>
            <Text
              style={[styles.data,{
                whiteSpace: "normal",
                wordWrap: "break-word",
                marginTop: 3,
                textAlign: "center",
              }]}
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
    // Replace <p> tags with new lines
    const formattedText = data.replace(/<p>(.*?)<\/p>/gs, "$1\n");

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
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={[styles.data, {marginTop:5}]}>{post.data}</Text>
              <Text
                style={{
                  color: "grey",
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
              alignContent: "flex-start",
              borderRight: 1,
              borderRightWidth: 1,
              borderRightColor: "gray",
              padding: 10,
              height: "100%",
            }}
          >
            {props.selectedImage && (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 120, height: 120 }}
                  src={props.selectedImage}
                ></Image>
              </View>
            )}

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
                  justifyContent: "flex-start",
                  alignContent: "center",
                }}
              >
                {/*name and lastname */}
                {(props.name || props.lastName) && (
                  <>
                    {datiPersonali(
                      "/marilyn/user.png",
                      props.name,
                      props.lastName
                    )}
                  </>
                )}
                {/*email */}
                {props.email && (
                  <>{datiPersonali("/marilyn/email.png", props.email)}</>
                )}

                {/*phone */}
                {props.phone && (
                  <>{datiPersonali("/marilyn/phone.png", props.phone)}</>
                )}

                {/*Address */}
                {(props.address || props.postalCode || props.city) && (
                  <>
                    {datiPersonali(
                      "/marilyn/house.png",
                      props.address,
                      props.postalCode,
                      props.city
                    )}
                  </>
                )}
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
                      }}
                    >
                      {props.city}
                    </Text>
                  </View>
                )}

                {/*Date of birth */}
                {props.dateBirth && (
                  <>{datiPersonali("/marilyn/calendar.png", props.dateBirth)}</>
                )}

                {/*Place of birth */}
                {props.placeBirth && (
                  <>
                    {datiPersonali("/marilyn/location.png", props.placeBirth)}
                  </>
                )}

                {/*Gender */}
                {props.genere && (
                  <>{datiPersonali("/marilyn/gender.png", props.genere)}</>
                )}

                {/*Nazionalita' */}
                {props.nationality && (
                  <>{datiPersonali("/marilyn/flag.png", props.nationality)}</>
                )}

                {/*Civil Status */}
                {props.civilStatus && (
                  <>{datiPersonali("/marilyn/users.png", props.civilStatus)}</>
                )}

                {/*Licnese */}
                {props.license && (
                  <>{datiPersonali("/marilyn/car.png", props.license)}</>
                )}
                {/*Website */}
                {props.website && (
                  <>{datiPersonali("/marilyn/globe.png", props.website)}</>
                )}

                {props.linkin && (
                  <>{datiPersonali("/marilyn/linkedin.png", props.linkin)}</>
                )}
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
              marginLeft:5
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

export default DocumentMarilyn;
