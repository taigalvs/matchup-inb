$(document).ready(function () {
  $("#match_table").DataTable({
    paging: false,
    ordering: false,
    searching: false,
    info: false,

    data: data,
    columns: [
      { data: "number" },
      { data: "name" },
      { data: "region" },
      { data: "description" },
      { data: "email" },
    ],

    columnDefs: [
      {
        "width": "80px",
        "targets": 0,
        "data": "number",
        render: function (data, type, row, meta) {
          return '<img src="' + data + '">';
        },
      },
    ],
  });
});

let data = [
  {
    number:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGy0IHC-wxE5Q/profile-displayphoto-shrink_800_800/0/1536103861163?e=1627516800&v=beta&t=Tblwo61jTrJpfbezYJEQvEGXVTk6rYSwASu2DZ3UtRg",
    name: "Ricardo Ricardson",
    region: "São Paulo, SP",
    description: "Arquiteto",
    email: "email@teste.com",
  },
  {
    number:
      "https://media-exp1.licdn.com/dms/image/C5603AQGli6Cr3GK9Rg/profile-displayphoto-shrink_800_800/0/1621989400334?e=1627516800&v=beta&t=aHrcIF5I8Wxhkv2EVa1B1nvwdH5pr6yjhODMJ4NL3s4",
    name: "Laura Gomes",
    region: "Rio de Janeiro",
    description: "Web Developer",
    email: "email@teste.com",
  },
  {
    number:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHrj3P-TaBXPQ/profile-displayphoto-shrink_800_800/0/1618396825742?e=1627516800&v=beta&t=UxRe-GPflYIIzL1TqGT_9wMLXO2xEXAbVs_7KxFAE08",
    name: "Katia Gomes",
    region: "Mogi das Cruzes, SP",
    description: "Tech Lead",
    email: "email@teste.com",
  },
  {
    number:
      "https://media-exp1.licdn.com/dms/image/C4E03AQF1B0gUMWZyOA/profile-displayphoto-shrink_800_800/0/1620314460884?e=1627516800&v=beta&t=9_fkjpQchUvEE9BTKyF-o9BNZl3gpHEVKCVwj1hiUEc",
    name: "Leila Oliveira",
    region: "São Paulo, SP",
    description: "CEO & Founder",
    email: "email@teste.com",
  },
  {
    number:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHoR1_dgr3bNQ/profile-displayphoto-shrink_800_800/0/1614990422798?e=1627516800&v=beta&t=f_X4M2uO2QippcPZBXaC0VNubu-em9FcJkSkITMPE5w",
    name: "Cássio Almeida",
    region: "Osasco, SP",
    description: "Co-founder",
    email: "email@teste.com",
  },
];
