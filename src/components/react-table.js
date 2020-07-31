import React from "react";
import ReactTable from "react-table";
import * as firebase from "firebase";

class DataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          projectTitle: "",
          projectDesc: "",
          projectLang: "",
          projectDate: "",
        },
      ],
    };
  }
  getData() {
    const data = [];
    const node = this.props.node;
    return firebase
      .database()
      .ref(node)
      .on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const allData = childSnapshot.val();
          const completeData = {
            projectTitle: (
              <a
                href={allData.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {allData.projectTitle}
              </a>
            ),
            projectDesc: allData.projectDesc,
            projectLang: allData.projectLang,
            projectDate: allData.projectDate,
          };
          data.push(completeData);
        });
        this.setState({ data });
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const columns = [
      {
        Header: "Title",
        accessor: "projectTitle",
        width: 300,
        maxWidth: 300,
      },
      {
        Header: "Description",
        accessor: "projectDesc",
        width: 500,
        maxWidth: 500,
      },
      {
        Header: "Language",
        accessor: "projectLang",
        width: 200,
        maxWidth: 200,
      },
      {
        Header: "Date",
        accessor: "projectDate",
        width: 100,
        maxWidth: 100,
      },
    ];
    return (
      <div>
        <ReactTable
          columns={columns}
          data={this.state.data}
          defaultPageSize={this.props.pageSize}
        ></ReactTable>
      </div>
    );
  }
}

export default DataTable;
