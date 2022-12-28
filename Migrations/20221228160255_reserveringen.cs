using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wdpr.Migrations
{
    /// <inheritdoc />
    public partial class reserveringen : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Reserveringen",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VoorstellingId = table.Column<int>(type: "int", nullable: false),
                    BezoekerId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    TotaalPrijs = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reserveringen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reserveringen_AspNetUsers_BezoekerId",
                        column: x => x.BezoekerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Reserveringen_Voorstellingen_VoorstellingId",
                        column: x => x.VoorstellingId,
                        principalTable: "Voorstellingen",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Stoel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RijNr = table.Column<int>(type: "int", nullable: false),
                    StoelNr = table.Column<int>(type: "int", nullable: false),
                    Rang = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReserveringId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stoel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stoel_Reserveringen_ReserveringId",
                        column: x => x.ReserveringId,
                        principalTable: "Reserveringen",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reserveringen_BezoekerId",
                table: "Reserveringen",
                column: "BezoekerId");

            migrationBuilder.CreateIndex(
                name: "IX_Reserveringen_VoorstellingId",
                table: "Reserveringen",
                column: "VoorstellingId");

            migrationBuilder.CreateIndex(
                name: "IX_Stoel_ReserveringId",
                table: "Stoel",
                column: "ReserveringId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stoel");

            migrationBuilder.DropTable(
                name: "Reserveringen");
        }
    }
}
