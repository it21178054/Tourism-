import React from 'react';

import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    marginBottom: 10,
  },
});

const MyDocument = ({ name, date, place, count, email, telephone }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Attendance Report</Text>
        <View style={styles.value}>
          <Text style={styles.label}>Name:</Text>
          <Text>{name}</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.label}>Date:</Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.label}>Place:</Text>
          <Text>{place}</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.label}>Count:</Text>
          <Text>{count}</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.label}>Email:</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.label}>Telephone:</Text>
          <Text>{telephone}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function ReportGenerate({ name, date, place, count, email, telephone }) {
  return (
    <div>
      <PDFDownloadLink document={<MyDocument name={name} date={date} place={place} count={count} email={email} telephone={telephone} />} fileName="attendance_report.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download here!'
        }
      </PDFDownloadLink>
    </div>
  );
}
