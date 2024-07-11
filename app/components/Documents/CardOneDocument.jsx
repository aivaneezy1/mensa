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

    textAlign: "center",
    marginTop: 5,
  },

  titleRight: {
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: 600,
    textAlign: "left",
    marginTop: 5,
  },

  data: {
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize: 12,
  },
});

let currentYear = new Date().getFullYear();

const datiPersonali = (dati, dati2, dati3) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 3,
      }}
    >
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
          key={index}>
            <Text style={[styles.data, { marginTop: 5 }]}>{post.data}</Text>
            <Text
              style={{
                color: "#3B82F6",
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

const handleBorder = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom:10,
      }}
    >
      <View
        style={{
          borderBottom: 1,
          borderBottomColor: "blue",
          borderBottomWidth: 1,
          width: "50%",
        }}
      ></View>
    </View>
  );
};

const CardOneDocument = (props) => {
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
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              padding: 10,
              height: "100%",
              backgroundColor: props.cardColors,
            }}
          >
            {props.selectedImage && (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 5,
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
                <Text style={[styles.title]}>Dati Personali</Text>
              </View>

              {handleBorder()}

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
                  <>{datiPersonali(props.name, props.lastName)}</>
                )}
                {/*email */}
                {props.email && <>{datiPersonali(props.email)}</>}

                {/*phone */}
                {props.phone && <>{datiPersonali(props.phone)}</>}

                {/*Address */}
                {(props.address || props.postalCode || props.city) && (
                  <>
                    {datiPersonali(props.address, props.postalCode, props.city)}
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
                {props.dateBirth && <>{datiPersonali(props.dateBirth)}</>}

                {/*Place of birth */}
                {props.placeBirth && <>{datiPersonali(props.placeBirth)}</>}

                {/*Gender */}
                {props.genere && <>{datiPersonali(props.genere)}</>}

                {/*Nazionalita' */}
                {props.nationality && <>{datiPersonali(props.nationality)}</>}

                {/*Civil Status */}
                {props.civilStatus && <>{datiPersonali(props.civilStatus)}</>}

                {/*Licnese */}
                {props.license && <>{datiPersonali(props.license)}</>}
                {/*Website */}
                {props.website && <>{datiPersonali(props.website)}</>}

                {props.linkin && <>{datiPersonali(props.linkin)}</>}
              </View>
            </View>
             {handleBorder()}
            {/*Competenze */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.title]}>Competenze</Text>

              {props.compFieldList.length > 0 &&
                handleCompAndLang(props.compFieldList)}
            </View>

            {handleBorder()}

            {/*Lingue */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.title]}>Lingue</Text>

              {props.langFieldList.length > 0 &&
                handleCompAndLang(props.langFieldList)}
            </View>

             {handleBorder()}
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
              width: "100%",
            }}
          >
            {/*Name and Last Name */}
            <View>
              <Text
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: 18,
                  marginTop:5,
                }}
              >
                {props.name}
              </Text>
              <Text
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "grey",
                }}
              >
                {props.lastName}
              </Text>
            </View>
            <View
              style={{
                borderBottom: 1,
                borderBottomColor: "blue",
                borderBottomWidth: 1,
                width: "50%",
                marginBottom:10,
                marginTop:10,
              }}
            ></View>

            {/*Profile */}
            <View
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Text style={[styles.titleRight]}>Profilo</Text>
              {handleProfile(props.profileContent)}
            </View>

              <View
              style={{
                borderBottom: 1,
                borderBottomColor: "blue",
                borderBottomWidth: 1,
                width: "50%",
                marginBottom:10,
                marginTop:10,
              }}
            ></View>
            {/*Istruzione */}
            <View
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Text style={[styles.titleRight]}>Istruzione</Text>
              {handleBgData(props.formDataFieldList)}
            </View>

             <View
              style={{
                borderBottom: 1,
                borderBottomColor: "blue",
                borderBottomWidth: 1,
                width: "50%",
                marginBottom:10,
                marginTop:10,
              }}
            ></View>

            {/*Esperienze */}
            <View
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <Text style={[styles.titleRight]}>Esperienze</Text>
              {handleBgData(props.exprDataFieldList)}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CardOneDocument;
