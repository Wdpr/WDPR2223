using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class Datatypesennamenverbeterd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Artiest_Band_Bandid",
                table: "Artiest");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Artiest_Artiestid",
                table: "Voorstellingen");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Band_Bankid",
                table: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "AantalStoelen",
                table: "Zaal");

            migrationBuilder.RenameColumn(
                name: "Artiestid",
                table: "Voorstellingen",
                newName: "ArtiestId");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Voorstellingen",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Bankid",
                table: "Voorstellingen",
                newName: "BandId");

            migrationBuilder.RenameIndex(
                name: "IX_Voorstellingen_Artiestid",
                table: "Voorstellingen",
                newName: "IX_Voorstellingen_ArtiestId");

            migrationBuilder.RenameIndex(
                name: "IX_Voorstellingen_Bankid",
                table: "Voorstellingen",
                newName: "IX_Voorstellingen_BandId");

            migrationBuilder.RenameColumn(
                name: "img",
                table: "Band",
                newName: "Img");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Band",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "img",
                table: "Artiest",
                newName: "Img");

            migrationBuilder.RenameColumn(
                name: "Bandid",
                table: "Artiest",
                newName: "BandId");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Artiest",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_Artiest_Bandid",
                table: "Artiest",
                newName: "IX_Artiest_BandId");

            migrationBuilder.AddColumn<int>(
                name: "AantalDerderRang",
                table: "Zaal",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AantalEersteRang",
                table: "Zaal",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AantalTweedeRang",
                table: "Zaal",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Artiest_Band_BandId",
                table: "Artiest",
                column: "BandId",
                principalTable: "Band",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Artiest_ArtiestId",
                table: "Voorstellingen",
                column: "ArtiestId",
                principalTable: "Artiest",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Band_BandId",
                table: "Voorstellingen",
                column: "BandId",
                principalTable: "Band",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Artiest_Band_BandId",
                table: "Artiest");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Artiest_ArtiestId",
                table: "Voorstellingen");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Band_BandId",
                table: "Voorstellingen");

            migrationBuilder.DropColumn(
                name: "AantalDerderRang",
                table: "Zaal");

            migrationBuilder.DropColumn(
                name: "AantalEersteRang",
                table: "Zaal");

            migrationBuilder.DropColumn(
                name: "AantalTweedeRang",
                table: "Zaal");

            migrationBuilder.RenameColumn(
                name: "ArtiestId",
                table: "Voorstellingen",
                newName: "Artiestid");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Voorstellingen",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "BandId",
                table: "Voorstellingen",
                newName: "Bankid");

            migrationBuilder.RenameIndex(
                name: "IX_Voorstellingen_ArtiestId",
                table: "Voorstellingen",
                newName: "IX_Voorstellingen_Artiestid");

            migrationBuilder.RenameIndex(
                name: "IX_Voorstellingen_BandId",
                table: "Voorstellingen",
                newName: "IX_Voorstellingen_Bankid");

            migrationBuilder.RenameColumn(
                name: "Img",
                table: "Band",
                newName: "img");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Band",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Img",
                table: "Artiest",
                newName: "img");

            migrationBuilder.RenameColumn(
                name: "BandId",
                table: "Artiest",
                newName: "Bandid");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Artiest",
                newName: "id");

            migrationBuilder.RenameIndex(
                name: "IX_Artiest_BandId",
                table: "Artiest",
                newName: "IX_Artiest_Bandid");

            migrationBuilder.AddColumn<int>(
                name: "AantalStoelen",
                table: "Zaal",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Artiest_Band_Bandid",
                table: "Artiest",
                column: "Bandid",
                principalTable: "Band",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Artiest_Artiestid",
                table: "Voorstellingen",
                column: "Artiestid",
                principalTable: "Artiest",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Band_Bankid",
                table: "Voorstellingen",
                column: "Bankid",
                principalTable: "Band",
                principalColumn: "id");
        }
    }
}
