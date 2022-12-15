using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class initvanvoorstellingeninTheaterDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Band",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Naam = table.Column<string>(type: "TEXT", nullable: false),
                    img = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Band", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Zaal",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AantalStoelen = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zaal", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Artiest",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Naam = table.Column<string>(type: "TEXT", nullable: false),
                    img = table.Column<string>(type: "TEXT", nullable: false),
                    Bandid = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Artiest", x => x.id);
                    table.ForeignKey(
                        name: "FK_Artiest_Band_Bandid",
                        column: x => x.Bandid,
                        principalTable: "Band",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "Voorstellingen",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Naam = table.Column<string>(type: "TEXT", nullable: false),
                    Img = table.Column<string>(type: "TEXT", nullable: false),
                    Artiestid = table.Column<int>(type: "INTEGER", nullable: true),
                    Bankid = table.Column<int>(type: "INTEGER", nullable: true),
                    ZaalId = table.Column<int>(type: "INTEGER", nullable: true),
                    Datum = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Tijd = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Prijs = table.Column<int>(type: "INTEGER", nullable: true),
                    Genre = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Voorstellingen", x => x.id);
                    table.ForeignKey(
                        name: "FK_Voorstellingen_Artiest_Artiestid",
                        column: x => x.Artiestid,
                        principalTable: "Artiest",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Voorstellingen_Band_Bankid",
                        column: x => x.Bankid,
                        principalTable: "Band",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Voorstellingen_Zaal_ZaalId",
                        column: x => x.ZaalId,
                        principalTable: "Zaal",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Artiest_Bandid",
                table: "Artiest",
                column: "Bandid");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_Artiestid",
                table: "Voorstellingen",
                column: "Artiestid");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_Bankid",
                table: "Voorstellingen",
                column: "Bankid");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_ZaalId",
                table: "Voorstellingen",
                column: "ZaalId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Voorstellingen");

            migrationBuilder.DropTable(
                name: "Artiest");

            migrationBuilder.DropTable(
                name: "Zaal");

            migrationBuilder.DropTable(
                name: "Band");
        }
    }
}
