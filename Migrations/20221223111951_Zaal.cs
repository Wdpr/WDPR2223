using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class Zaal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Zaal_ZaalId",
                table: "Voorstellingen");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Zaal",
                table: "Zaal");

            migrationBuilder.RenameTable(
                name: "Zaal",
                newName: "Zalen");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Zalen",
                table: "Zalen",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalId",
                table: "Voorstellingen",
                column: "ZaalId",
                principalTable: "Zalen",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorstellingen_Zalen_ZaalId",
                table: "Voorstellingen");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Zalen",
                table: "Zalen");

            migrationBuilder.RenameTable(
                name: "Zalen",
                newName: "Zaal");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Zaal",
                table: "Zaal",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstellingen_Zaal_ZaalId",
                table: "Voorstellingen",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "Id");
        }
    }
}
