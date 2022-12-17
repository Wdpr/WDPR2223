using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class databaseSqlServerTheaterContext : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Wachtwoord = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Band",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Img = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Band", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Zaal",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AantalEersteRang = table.Column<int>(type: "int", nullable: true),
                    AantalTweedeRang = table.Column<int>(type: "int", nullable: true),
                    AantalDerderRang = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zaal", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Artiest",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Img = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BandId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Artiest", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Artiest_Band_BandId",
                        column: x => x.BandId,
                        principalTable: "Band",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Voorstellingen",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Img = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ArtiestId = table.Column<int>(type: "int", nullable: true),
                    BandId = table.Column<int>(type: "int", nullable: true),
                    ZaalId = table.Column<int>(type: "int", nullable: true),
                    Datum = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Tijd = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Prijs = table.Column<int>(type: "int", nullable: true),
                    Genre = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Voorstellingen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Voorstellingen_Artiest_ArtiestId",
                        column: x => x.ArtiestId,
                        principalTable: "Artiest",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Voorstellingen_Band_BandId",
                        column: x => x.BandId,
                        principalTable: "Band",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Voorstellingen_Zaal_ZaalId",
                        column: x => x.ZaalId,
                        principalTable: "Zaal",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Artiest_BandId",
                table: "Artiest",
                column: "BandId");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_ArtiestId",
                table: "Voorstellingen",
                column: "ArtiestId");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_BandId",
                table: "Voorstellingen",
                column: "BandId");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstellingen_ZaalId",
                table: "Voorstellingen",
                column: "ZaalId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Accounts");

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
