using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class voorkeuren : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Intresse",
                table: "AspNetUsers");

            migrationBuilder.CreateTable(
                name: "Voorkeur",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    voorkeurNaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BezoekerId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Voorkeur", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Voorkeur_AspNetUsers_BezoekerId",
                        column: x => x.BezoekerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Voorkeur_BezoekerId",
                table: "Voorkeur",
                column: "BezoekerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Voorkeur");

            migrationBuilder.AddColumn<string>(
                name: "Intresse",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
