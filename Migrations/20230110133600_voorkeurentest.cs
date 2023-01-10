using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class voorkeurentest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorkeur_AspNetUsers_BezoekerId",
                table: "Voorkeur");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Voorkeur",
                table: "Voorkeur");

            migrationBuilder.RenameTable(
                name: "Voorkeur",
                newName: "Voorkeuren");

            migrationBuilder.RenameIndex(
                name: "IX_Voorkeur_BezoekerId",
                table: "Voorkeuren",
                newName: "IX_Voorkeuren_BezoekerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Voorkeuren",
                table: "Voorkeuren",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorkeuren_AspNetUsers_BezoekerId",
                table: "Voorkeuren",
                column: "BezoekerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorkeuren_AspNetUsers_BezoekerId",
                table: "Voorkeuren");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Voorkeuren",
                table: "Voorkeuren");

            migrationBuilder.RenameTable(
                name: "Voorkeuren",
                newName: "Voorkeur");

            migrationBuilder.RenameIndex(
                name: "IX_Voorkeuren_BezoekerId",
                table: "Voorkeur",
                newName: "IX_Voorkeur_BezoekerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Voorkeur",
                table: "Voorkeur",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorkeur_AspNetUsers_BezoekerId",
                table: "Voorkeur",
                column: "BezoekerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
