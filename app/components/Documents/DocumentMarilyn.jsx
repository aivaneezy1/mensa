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
import DOMPurify from "dompurify";
import HtmlToReact from 'html-to-react';


const HtmlToReactParser = HtmlToReact.Parser;
 const parser = new HtmlToReactParser();
const styles = StyleSheet.create({});

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
          <View key={index}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "medium",
                whiteSpace: "normal",
                wordWrap: "break-word",
                marginTop: 3,
                textAlign: "center",
              }}
            >
              {post.competenza}
            </Text>
            <Text
              style={{
                color: "gray",
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
  // Sanitize the HTML data
  const sanitizedData = DOMPurify.sanitize(data, {
    ALLOWED_TAGS: ['b', 'i', 'u', 'ol', 'ul', 'li', 'p', 'br', 'strong', 'em'],
    ALLOWED_ATTR: []
  });

  // Convert HTML to React components
  const reactElement = parser.parse(sanitizedData);

  // Function to recursively render React elements into PDF Text components
  const renderHtmlToPdf = (element) => {
    if (Array.isArray(element)) {
      return element.map((el, index) => renderHtmlToPdf(el));
    } else if (typeof element === 'object') {
      if (element.type === 'text') {
        return (
          <Text key={element.key || Math.random()}>
            {element.content}
          </Text>
        );
      } else if (element.type === 'tag') {
        return (
          <Text key={element.key || Math.random()}>
            {renderHtmlToPdf(element.children)}
          </Text>
        );
      }
    }
    return null;
  };

  return <View>{renderHtmlToPdf(reactElement)}</View>;
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
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    borderBottom: 1,
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                    textAlign: "center",
                    color: props.cardColors,
                    marginTop: 10,
                  }}
                >
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
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  borderBottom: 1,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  textAlign: "center",
                  color: props.cardColors,
                  marginTop: 10,
                }}
              >
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
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  borderBottom: 1,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  textAlign: "center",
                  color: props.cardColors,
                  marginTop: 10,
                }}
              >
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
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  borderBottom: 1,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1 / 2,
                  textAlign: "left",
                  color: props.cardColors,
                  marginTop: 10,
                }}
              >
                Profilo
              </Text>
              {props.profileContent && (handleProfile(props.profileContent)) }
              <Text>{props.profileContent}</Text>
            </View>

            {/*Istruzione */}
            <View></View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DocumentMarilyn;
